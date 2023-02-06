import { AuthenticationService } from './../../services/authentication.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegisterDto } from 'src/app/dto/registerDto';
import { HttpErrorResponse } from '@angular/common/http';
import { matchingPasswordsValidator } from './validators'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(

    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService) { }

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

    this.registerForm.addValidators(matchingPasswordsValidator)
  }

  registerUser(registerDto: RegisterDto) {
    this.authService.registerUser(registerDto).subscribe(
      (response: void) => {
        this.router.navigate(['/'])
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      alert("Invalid form")
      return
    }
    if (this.registerForm.get('password')!.value != this.registerForm.get('rePassword')!.value) {
      alert(`Passwords don't match`)
      return
    }
    this.registerUser(this.registerForm.value)

  }

  onBackToLoginClick() {
    this.router.navigate([''])
  }

  get username() {
    return this.registerForm.get('username')
  }

  get nickname() {
    return this.registerForm.get('nickname')
  }

  get password() {
    return this.registerForm.get('password')
  }

  get rePassword() {
    return this.registerForm.get('rePassword')
  }


}
