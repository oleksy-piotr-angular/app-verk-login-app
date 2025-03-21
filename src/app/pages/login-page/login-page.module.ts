import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';
import { CheckEmailDirective } from '../../directives/check-email.directive';
import { ErrorMessageControlComponent } from '../../components/error-message-control/error-message-control.component';
import { InputControlComponent } from '../../components/input-control/input-control.component';
import { ButtonSubmitComponent } from '../../components/button-submit/button-submit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginPageComponent,
    CheckEmailDirective,
    ErrorMessageControlComponent,
    InputControlComponent,
    ButtonSubmitComponent,
  ],
  imports: [CommonModule, LoginPageRoutingModule, FormsModule],
})
export class LoginPageModule {}
