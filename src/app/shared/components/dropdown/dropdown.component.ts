/*
 dropdown.component.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent implements ControlValueAccessor {
  @Input() options: string[] = [];
  @Input() template: string = "";

  @Output() currentSelectedChange = new EventEmitter<string>();

  currentSelected: string = "";
  isOptionsHidden: boolean = true;
  dropdownIcon: string = "▼";

  private onChange = (value: string) => {
  };
  private onTouch = (value: string) => {
  };

  constructor() {
  }

  writeValue(value: string): void {
    if (this.template === "")
    {
      this.setCurrentSelected(this.options[0]);
    }
    else
    {
      this.currentSelected = this.template;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  toggleOptionsDisplay() {
    if (this.isOptionsHidden) {
      this.openOptionsDisplay();
    } else {
      this.closeOptionsDisplay();
    }
  }

  closeOptionsDisplay() {
    this.isOptionsHidden = true;
    this.dropdownIcon = "▼";
  }

  openOptionsDisplay() {
    this.isOptionsHidden = false;
    this.dropdownIcon = "▲";
  }

  setCurrentSelected(value: any) {
    this.currentSelected = value;
    this.onChange(value);
    this.onTouch(value);
    this.currentSelectedChange.emit(value);
    this.closeOptionsDisplay();
  }
}
