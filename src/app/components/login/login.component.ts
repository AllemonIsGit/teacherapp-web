import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  tokenService = new JwtHelperService()
  username: string

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [``, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]],
      password: [``, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]]
    })

    // if (this.tokenService.isTokenExpired(localStorage.getItem('accessToken'))) {
    //   return
    // } else {
    //   this.router.navigate(['/app'])
    // }
  }

  onRegisterClick() {
    this.router.navigate([`/register`])
  }

  onLoginClick() {
    console.log(this.loginForm.getRawValue().username)
  }

  changeColor() {
    var input = this.renderer.selectRootElement(`#inputUsername`)
    this.renderer.addClass(input, `myInputInvalid`)
    input = this.renderer.selectRootElement(`#inputPassword`)
    this.renderer.addClass(input, `myInputInvalid`)
  }

  onInputChange() {
    if (!this.loginForm.get('username')?.valid) {
      this.changeColor()
    } else {
      const input = this.renderer.selectRootElement(`#inputUsername`)
      this.renderer.removeClass(input, "myInputInvalid")
    }

  }

  

}
