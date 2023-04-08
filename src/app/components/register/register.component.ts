import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HTMLService } from 'src/app/services/html.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  usernameInvalid: boolean = false
  nicknameInvalid: boolean = false
  passwordInvalid: boolean = false
  rePasswordInvalid: boolean = false
  passwordsMatch: boolean = true

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService,
    private htmlService: HTMLService
  ) {  }

  ngOnInit(): void {
    
    this.registerForm = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]],
      nickname: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]],
      rePassword: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]]
    })
  }


  onBackToLoginClick() {
    this.router.navigate([``])
  }

  onSubmit() {
    console.log(this.registerForm.get('username')?.value == this.registerForm.get('nickname')?.value)
    console.log(this.registerForm.get('password')?.touched)
  }

  onUsernameFieldChange() {
    this.usernameInvalid = this.htmlService.validateInputAndToggle(this.registerForm.get('username')?.valid ?? true, '#inputUsername')
  }

  onNicknameFieldChange() {
    this.nicknameInvalid = this.htmlService.validateInputAndToggle(this.registerForm.get('nickname')?.valid ?? true, '#inputNickname')
  }

  onPasswordFieldChange() {
    this.passwordInvalid = this.htmlService.validateInputAndToggle(this.registerForm.get('password')?.valid ?? true, '#inputPassword')
    this.passwordMatchCheck()
  }

  onRePasswordFieldChange() {
    this.rePasswordInvalid = this.htmlService.validateInputAndToggle(this.registerForm.get('rePassword')?.valid ?? true, '#inputRepassword')
    this.passwordMatchCheck()
  }

  passwordMatchCheck() {
    if (this.registerForm.get('password')?.value == this.registerForm.get('rePassword')?.value) {
      this.passwordsMatch = true
    } else {
      this.passwordsMatch = false
    }
  }




}
