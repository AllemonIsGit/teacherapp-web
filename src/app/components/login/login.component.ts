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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog
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
    
  }

  onLoginClick() {

  }

}
