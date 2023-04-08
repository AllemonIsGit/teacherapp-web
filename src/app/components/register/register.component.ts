import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterDto } from 'src/app/dto/registerDto';
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
  registerButtonDisabled = true
  serverResponse: any

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
    this.authService.registerUser(this.registerForm.value).subscribe(
      (response: any) => {
        this.serverResponse = response
      },
      (error: HttpErrorResponse) => {
        this.serverResponse = error.error
        var parsed: any = JSON.parse(error.error)
        this.serverResponse = parsed.message
      }
    )
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
      this.registerButtonDisabled = false
    } else {
      this.passwordsMatch = false
      this.registerButtonDisabled = true
    }
  }
}
