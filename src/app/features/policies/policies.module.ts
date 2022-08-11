/*!
 policies.module.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {PoliciesRoutingModule} from './policies.routing.module';
import {LicenseComponent} from "./pages/license/license.component";

@NgModule({
  declarations: [
    LicenseComponent
  ],
  imports: [
    PoliciesRoutingModule,
    CommonModule
  ],
  exports: [],
  providers: [],
  bootstrap: []
})
export class PoliciesModule {
}
