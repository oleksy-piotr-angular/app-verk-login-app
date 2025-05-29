import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  emailFormatValidator,
  passwordStrengthValidator,
} from '../../shared/validators/validators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent implements OnInit {
  public loginForm!: FormGroup;
  public controls = ['email', 'password']; // Dynamic controls array

  constructor(
    private fb: FormBuilder, // FormBuilder for dynamic form creation
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Redirect to the home page if the user is already authenticated
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/homepage']);
    }

    // Initialize the reactive form dynamically
    this.loginForm = this.fb.group(
      this.controls.reduce(
        (acc: Record<string, FormControl>, control: string) => {
          acc[control] = this.fb.control('', this.getValidators(control));
          return acc;
        },
        {} as Record<string, FormControl>
      )
    );
  }

  // Define validators dynamically based on control name
  private getValidators(control: string) {
    switch (control) {
      case 'email':
        return [Validators.required, emailFormatValidator()];
      case 'password':
        return [Validators.required, passwordStrengthValidator()];
      default:
        return [Validators.required];
    }
  }

  // Handle form submission
  public onSubmit(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.auth.login(formData.email, formData.password);

      // Log the form data to the console
      console.log('Form Data:', formData);
    } else {
      console.log('Form is invalid');
    }
  }
}
