import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  InputControlAttrData,
  LabelsType,
} from '../../data-structure-definitions/input-control-attr-data';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrl: './input-control.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class InputControlComponent {
  @Input('input-control') public controlAttrData!: InputControlAttrData;
  @Output('onValueChange') public valueEmitter: EventEmitter<{
    label: LabelsType;
    value: string;
  }> = new EventEmitter<{ label: LabelsType; value: string }>();

  // call method when the input value changes and emits the new value with event-binding
  onChange(value: string | undefined): void {
    this.valueEmitter.emit({
      label: this.controlAttrData.label,
      value: value || '',
    });
  }
}
