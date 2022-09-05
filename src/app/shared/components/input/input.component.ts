/*
 input.component.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormGroup, FormGroupDirective, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() formControlName = "";

  fg: FormGroup | undefined;
  value: string = "";

  @Input() type: string = "";
  @Input() placeholder: string = "";

  private onChange = (value: any) => {
  };
  private onTouch = (value: any) => {
  };

  constructor(private rootFormGroup: FormGroupDirective) {
  }

  ngOnInit(): void {
    this.fg = this.rootFormGroup.control;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  change(e: any) {
    let value = e.target.value;
    this.value = value != undefined ? value : "";
    this.onChange(value);
    this.onTouch(value);
  }

  isFieldValid() {
    return this.fg?.controls[this.formControlName].valid;
  }
}
