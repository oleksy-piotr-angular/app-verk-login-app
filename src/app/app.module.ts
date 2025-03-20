import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { CheckEmailDirective } from './directives/check-email.directive';
import { HttpClientModule } from '@angular/common/http';
import { ErrorMessageControlComponent } from './components/error-message-control/error-message-control.component';
import { InputControlComponent } from './components/input-control/input-control.component';
import { ButtonSubmitComponent } from './components/button-submit/button-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CheckEmailDirective,
    ErrorMessageControlComponent,
    InputControlComponent,
    ButtonSubmitComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
