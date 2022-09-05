/*
 shared.module.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */


//CORE IMPORTS
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//COMPONENT IMPORTS
import {ImageHeaderComponent} from './components/image-header/image-header.component';
import {DropdownComponent} from "./components/dropdown/dropdown.component";
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { InputComponent } from './components/input/input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    ImageHeaderComponent,
    DropdownComponent,
    ClickOutsideDirective,
    InputComponent,
    CheckboxComponent
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ImageHeaderComponent,
    DropdownComponent,
    InputComponent,
    CheckboxComponent
  ]
})
export class SharedModule {
}
