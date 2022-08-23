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
import {ReactiveFormsModule} from "@angular/forms";

//MATERIAL IMPORTS
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";

//PRODUCT IMPORTS
import {ProductRoutingModule} from './product.routing.module';

//CHILD COMPONENT IMPORTS
import {RegisterComponent} from "./pages/register/register.component";
import {LoginComponent} from "./pages/login/login.component";
import {CodeOfConductComponent} from "./pages/code-of-conduct/code-of-conduct.component";


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    CodeOfConductComponent
  ],
  imports: [
    ProductRoutingModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule
  ],
  exports: [],
  providers: [],
  bootstrap: []
})
export class ProductModule {
}
