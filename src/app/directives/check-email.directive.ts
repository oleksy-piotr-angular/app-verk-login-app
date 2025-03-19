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
  @Input('appCheckEmail') checkEmail: boolean = false; //validation check is disabled by default
  validate(control: AbstractControl): ValidationErrors | null {
    const EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    //If Not Check Email do nothing and return null
    if (!this.checkEmail) {
      return null;
    }

    //Test Email with Regular Expression and return error if not match
    return EMAIL_REGEXP.test(control.value) ? null : { isEmailInvalid: true };
  }
}
