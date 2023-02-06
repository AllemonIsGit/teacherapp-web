import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

export function matchingPasswordsValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value
    const rePassword = control.get('rePassword')?.value

    const doMatch = password == rePassword

    return doMatch ? null : { noMatch: true }
}