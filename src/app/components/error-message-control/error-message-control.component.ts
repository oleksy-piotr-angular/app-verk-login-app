import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error-message-control',
  templateUrl: './error-message-control.component.html',
  styleUrl: './error-message-control.component.scss',
})
export class ErrorMessageControlComponent implements OnChanges {
  @Input() control: ValidationErrors | null = null;
  errorMessages: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['control'] && this.control) {
      this.errorMessages = this.getErrorMessages(this.control);
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
