import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';

  onSubmit(formValue: { login: { email: string; password: string } }) {
    console.log(formValue);
  }
}
