import { Component, Input, forwardRef } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() public label!: string; // Field label
  @Input() public type: string = 'text'; // Input type (e.g. text, password)
  @Input() public placeholder: string = ''; // Placeholder for input
  @Input() public control?: AbstractControl; // Form control for validation

  public value: string = ''; // Field value
  public isDisabled: boolean = false; // Is the field disabled

  // Functions passed by Angular
  public changed: (value: string) => void = () => {};
  public onTouched: () => void = () => {};

  //Writes a new value to the element.
  writeValue(value: string): void {
    this.value = value || '';
  }

  // Sets the value of the input field when it changes from Event
  public onChanged(event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value;

    this.changed(value);
  }

  //Registers a callback fn which is called when value changes in the UI control.
  registerOnChange(fn: (value: string) => void): void {
    this.changed = fn;
  }

  // Registers a callback function that is called when the control receives a touch event.
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Sets the disabled state of the control
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  // Called when input value changes
  onInputChange(value: string): void {
    this.value = value;
    this.changed(value);
  }
}
