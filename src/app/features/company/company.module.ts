/*
 company.module.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

//CORE IMPORTS
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";

//COMPANY IMPORTS
import {CompanyRoutingModule} from './company.routing.module';

//CHILD COMPONENT IMPORTS
import {AboutComponent} from "./pages/about/about.component";

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CompanyRoutingModule,
    CommonModule,
    SharedModule,
  ],
  exports: [],
  providers: [],
  bootstrap: []
})
export class CompanyModule {
}
