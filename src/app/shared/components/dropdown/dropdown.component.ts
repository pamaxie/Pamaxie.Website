/*
 dropdown.component.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() options: string[] = [];
  @Output() currentSelectedChange = new EventEmitter<string>();
  isOptionsHidden: boolean = true;
  dropdownIcon: string = "▼";

  _currentSelected: string = "";
  get currentSelected() {
    return this._currentSelected;
  }

  @Input() set currentSelected(value) {
    this._currentSelected = value;
    this.closeOptionsDisplay();
  }


  constructor() {
  }

  ngOnInit(): void {
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

  setCurrentSelected(option: string) {
    this.currentSelected = option;
    this.currentSelectedChange.emit(option);
  }

}
