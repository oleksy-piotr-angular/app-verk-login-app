import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appIsEmailInvalid]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: IsEmailInvalidDirective,
      multi: true,
    },
  ],
})
//custom directive to validate email with Regular Expression
export class IsEmailInvalidDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return EMAIL_REGEXP.test(control.value) ? null : { isEmailInvalid: true };
  }
}
