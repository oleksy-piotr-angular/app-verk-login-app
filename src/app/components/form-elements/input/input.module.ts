import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { ErrorMessageControlComponent } from '../../error-message-control/error-message-control.component';

@NgModule({
  declarations: [InputComponent, ErrorMessageControlComponent],
  imports: [CommonModule],
  exports: [InputComponent],
})
export class InputModule {}
