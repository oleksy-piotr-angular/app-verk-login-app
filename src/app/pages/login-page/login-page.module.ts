import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';
import { ErrorMessageControlComponent } from '../../components/error-message-control/error-message-control.component';
import { ButtonSubmitComponent } from '../../components/form-elements/button-submit/button-submit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../../components/form-elements/input/input.module';

@NgModule({
  declarations: [
    LoginPageComponent,
    ErrorMessageControlComponent,
    ButtonSubmitComponent,
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    InputModule,
    ReactiveFormsModule,
  ],
})
export class LoginPageModule {}
