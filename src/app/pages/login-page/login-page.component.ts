import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { InputControlAttrData } from '../../data-structure-definitions/input-control-attr-data';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent implements OnInit {
  public email: string = '';
  public password: string = '';
  public inputControls: InputControlAttrData[] = [];

  public constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    //redirect to the home page if user is still Authenticated
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
    //initialize controls for login form
    this.inputControls = [
      {
        label: 'email',
        type: 'email',
        placeholder: 'Enter email',
        isRequired: true,
        checkEmail: true,
      },
      {
        label: 'password',
        type: 'password',
        placeholder: 'Enter password',
        isRequired: true,
        checkEmail: false,
      },
    ];
  }

  public onSubmit(formValue: {
    login: { email: string; password: string };
  }): void {
    this.auth.login(formValue.login.email, formValue.login.password);
    this.inputControls.forEach((control) => {
      console.log('controls: ' + control.checkEmail + control.value);
    });
  }
}
