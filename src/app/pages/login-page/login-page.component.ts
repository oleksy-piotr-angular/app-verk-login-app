import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {
  InputControlAttrData,
  LabelsType,
} from '../../data-structure-definitions/input-control-attr-data';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent implements OnInit {
  public loginData = { email: '', password: '' };
  public inputControls: InputControlAttrData[] = [];

  public constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    //redirect to the home page if user is still Authenticated
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/homepage']);
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

  //change "loginData" object when the input value changes
  onValueChange(event: { label: LabelsType; value: string }): void {
    //bellow we use the type assertion to make sure that the label is either 'email' or 'password'
    const label: 'email' | 'password' = event.label;

    //we use the label to access the loginData object property and set the value for this property
    this.loginData[label] = event.value;
  }

  //handle the form submit event using data from loginData object
  public onSubmit(): void {
    this.auth.login(this.loginData.email, this.loginData.password);

    //to show in the console that we are using data from the input form controls
    console.log('loginData: ');
    console.log(this.loginData);
  }
}
