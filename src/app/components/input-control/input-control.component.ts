import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { InputControlAttrData } from '../../data-structure-definitions/input-control-attr-data';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrl: './input-control.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class InputControlComponent {
  @Input('input-control') public controlAttrData!: InputControlAttrData;
  @Output() public valueEmitter: EventEmitter<string> =
    new EventEmitter<string>();
  ngOnInit(): void {
    console.log(this.controlAttrData);
  }

  onChange(value: string | undefined): void {
    console.log(value);
  }
}
