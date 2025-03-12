import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent implements OnInit {
  public email: string = '';
  public password: string = '';

  public constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    //redirect to the home page if user is still Authenticated
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
  }

  public onSubmit(formValue: {
    login: { email: string; password: string };
  }): void {
    this.auth.login(formValue.login.email, formValue.login.password);
  }
}
