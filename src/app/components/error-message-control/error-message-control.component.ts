import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error-message-control',
  templateUrl: './error-message-control.component.html',
  styleUrl: './error-message-control.component.scss',
})
export class ErrorMessageControlComponent implements OnChanges {
  @Input('errors') set setErrors(_errors: ValidationErrors | null) {
    this.errors = _errors;
  }

  public errorMessages: string[] = [];
  private errors: ValidationErrors | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['setErrors'] && this.errors) {
      this.errorMessages = this.getErrorMessages(this.errors);
    }
  }

  private getErrorMessages(errors: ValidationErrors): string[] {
    const messages: string[] = [];
    for (const errorName in errors) {
      if (errors.hasOwnProperty(errorName)) {
        switch (errorName) {
          case 'required':
            messages.push('This field is required. ');
            break;
          case 'isEmailInvalid':
            messages.push(
              `The email address is invalid. Please enter a valid email address. `
            );
            break;
          default:
            messages.push('Invalid field.');
            break;
        }
      }
    }
    return messages;
  }
}
