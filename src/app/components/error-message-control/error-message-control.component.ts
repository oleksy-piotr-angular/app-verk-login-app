import { Component, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error-message-control',
  templateUrl: './error-message-control.component.html',
  styleUrls: ['./error-message-control.component.scss'],
})
export class ErrorMessageControlComponent {
  @Input() public control?: AbstractControl; // Input for the FormControl

  // Method to retrieve error messages based on validation errors
  get errorMessages(): string[] {
    const errors: ValidationErrors | null = this.control?.errors || null;
    const messages: string[] = [];

    if (errors) {
      for (const errorName in errors) {
        if (errors.hasOwnProperty(errorName)) {
          switch (errorName) {
            case 'required':
              messages.push('This field is required.');
              break;
            case 'emailFormat':
              messages.push('Invalid email format.');
              break;
            case 'passwordStrength':
              const error = errors['passwordStrength'];
              if (!error.hasUpperCase)
                messages.push(
                  'Password must contain at least one uppercase letter.'
                );
              if (!error.hasLowerCase)
                messages.push(
                  'Password must contain at least one lowercase letter.'
                );
              if (!error.hasNumber)
                messages.push(
                  'Password must contain at least one numeric digit.'
                );
              if (!error.hasMinLength)
                messages.push('Password must be at least 8 characters long.');
              break;
            default:
              messages.push('Invalid field.');
              break;
          }
        }
      }
    }

    return messages;
  }
}
