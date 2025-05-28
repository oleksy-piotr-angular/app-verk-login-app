import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-button-submit',
  templateUrl: './button-submit.component.html',
  styleUrl: './button-submit.component.scss',
})
export class ButtonSubmitComponent {
  @Input() formGroup!: FormGroup; // Reactive FormGroup input
  constructor() {}
}
