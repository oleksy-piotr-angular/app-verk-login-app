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
export class IsEmailInvalidDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    console.log('isEmail: ' + EMAIL_REGEXP.test(control.value));
    return EMAIL_REGEXP.test(control.value) ? null : { isEmailInvalid: true };
  }
}
