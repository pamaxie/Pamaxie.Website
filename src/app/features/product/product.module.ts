/*
 product.module.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

//CORE IMPORTS
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";

//PRODUCT IMPORTS
import {ProductRoutingModule} from './product.routing.module';

//CHILD COMPONENT IMPORTS


@NgModule({
  declarations: [],
  imports: [
    ProductRoutingModule,
    CommonModule,
    SharedModule
  ],
  exports: [],
  providers: [],
  bootstrap: []
})
export class ProductModule {
}
