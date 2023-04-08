import { HTMLService } from './../../services/html.service';
import { Component, OnInit } from '@angular/core';
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
  usernameInvalid: boolean = false
  passwordInvalid: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private htmlService: HTMLService
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

  onUsernameFieldChange() {
    this.usernameInvalid = this.htmlService.validateInputAndToggle(this.loginForm.get('username')?.valid ?? true, '#inputUsername')
  }

  onPasswordFieldChange() {
    this.passwordInvalid = this.htmlService.validateInputAndToggle(this.loginForm.get('password')?.valid ?? true, '#inputPassword')
  }



}
