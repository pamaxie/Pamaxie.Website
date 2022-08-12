/*
 shared.module.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ImageHeaderComponent} from './components/image-header/image-header.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    ImageHeaderComponent
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ImageHeaderComponent
  ]
})
export class SharedModule {
}
