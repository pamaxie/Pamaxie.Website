/*
 policies.module.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

//CORE IMPORTS
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";

//POLICIES IMPORTS
import {PoliciesRoutingModule} from './policies.routing.module';

//CHILD COMPONENT IMPORTS
import {PrivacyComponent} from "./pages/privacy/privacy.component";
import {TermsOfServiceComponent} from "./pages/terms-of-service/terms-of-service.component";
import {ThirdPartyLicensesComponent} from "./pages/third-party-licenses/third-party-licenses.component";
import {LicenseComponent} from "./pages/license/license.component";

@NgModule({
  declarations: [
    PrivacyComponent,
    TermsOfServiceComponent,
    ThirdPartyLicensesComponent,
    LicenseComponent
  ],
  imports: [
    PoliciesRoutingModule,
    CommonModule,
    SharedModule
  ],
  exports: [],
  providers: [],
  bootstrap: []
})
export class PoliciesModule {
}
