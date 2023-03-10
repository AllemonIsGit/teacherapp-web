import { HttpErrorResponse } from '@angular/common/http';
import { LoginResponse } from './../../dto/loginResponse';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  tokenService = new JwtHelperService()

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [``, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)]],
      password: [``, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]]
    })
    
    if (this.tokenService.isTokenExpired(localStorage.getItem('accessToken'))) {
      return
    } else {
      this.router.navigate(['/app'])
    }

  }

  onRegisterClick() {
    this.router.navigate(['/register'])

  }

  onLoginClick() {
    this.authenticationService.login(this.loginForm.value).subscribe(
      (response: LoginResponse) => {
        localStorage.setItem('accessToken', response.token)
        if (localStorage.getItem('accessToken') !== 'undefined') {
          this.router.navigate(['/app'])
        }
      },
      (error: HttpErrorResponse) => {
        alert(`${error.status} ${error.error}`)
      }
    )
  }

  get username() {
    return this.loginForm.get('username')
  }

  get password() {
    return this.loginForm.get('password')
  }

}
