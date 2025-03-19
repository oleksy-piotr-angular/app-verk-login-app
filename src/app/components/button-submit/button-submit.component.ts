import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-button-submit',
  templateUrl: './button-submit.component.html',
  styleUrl: './button-submit.component.scss',
  providers: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class ButtonSubmitComponent {
  constructor(public control: NgForm) {}
}
