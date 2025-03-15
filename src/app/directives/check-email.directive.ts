import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appCheckEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CheckEmailDirective,
      multi: true,
    },
  ],
})
//custom directive to validate email with Regular Expression
export class CheckEmailDirective implements Validator {
  @Input('appCheckEmail') checkEmail: boolean = false;
  validate(control: AbstractControl): ValidationErrors | null {
    const EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const isEmailInvalid =
      EMAIL_REGEXP.test(control.value) && this.checkEmail
        ? null
        : { isEmailInvalid: true };

    return isEmailInvalid;
  }
}
