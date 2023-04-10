import { HttpErrorResponse } from '@angular/common/http';
import { HTMLService } from './../../services/html.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  tokenService = new JwtHelperService()
  usernameInvalid: boolean = false
  passwordInvalid: boolean = false
  serverResponse: string

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private htmlService: HTMLService,
    private tokenHelper: JwtHelperService,
    private authService: AuthenticationService
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

    if (this.tokenHelper.isTokenExpired(localStorage.getItem('accessToken'))) {
      return
    } else {
      this.router.navigate(['/app'])
    }
  }

  onRegisterClick() {
    this.router.navigate([`/register`])
  }

  onLoginClick() {
    this.authService.login(this.loginForm.value).subscribe(
      (response: any) => {
        if (response.token) {
          localStorage.setItem('accessToken', response.token)
          return
        }
        this.serverResponse = response 
      },
      (error: HttpErrorResponse) => {
        console.log(error.error)
      }
    )
  }

  onUsernameFieldChange() {
    this.usernameInvalid = this.htmlService.validateInputAndToggle(this.loginForm.get('username')?.valid ?? true, '#inputUsername')
  }

  onPasswordFieldChange() {
    this.passwordInvalid = this.htmlService.validateInputAndToggle(this.loginForm.get('password')?.valid ?? true, '#inputPassword')
  }



}
