import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Custom validator for correct email format
export function emailFormatValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const email = control.value;
    const EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Email format regex

    if (email && !EMAIL_REGEXP.test(email)) {
      return { emailFormat: true }; // Return error if email format is invalid
    }

    return null; // Return null if email format is valid
  };
}

// Custom validator for password strength
export function passwordStrengthValidator(minLength = 8): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // Get the value of the control (password field)
    const password = control.value;

    // Check if the password exists (not null or undefined)
    if (password) {
      // Check if the password contains at least one uppercase letter
      const hasUpperCase = /[A-Z]/.test(password);

      // Check if the password contains at least one lowercase letter
      const hasLowerCase = /[a-z]/.test(password);

      // Check if the password contains at least one numeric digit
      const hasNumber = /[0-9]/.test(password);

      // Check if the password meets the minimum length requirement | 8 characters on default
      const hasMinLength = password.length >= minLength;

      // If any of the conditions are not met, return an error object
      if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasMinLength) {
        return {
          passwordStrength: {
            hasUpperCase, // Indicates whether the password has an uppercase letter
            hasLowerCase, // Indicates whether the password has a lowercase letter
            hasNumber, // Indicates whether the password has a numeric digit
            hasMinLength, // Indicates whether the password meets the minimum length requirement
          },
        };
      }
    }

    // If all conditions are met or the password is empty, return null (no errors)
    return null;
  };
}
