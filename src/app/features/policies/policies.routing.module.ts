/*!
 policies.routing.module.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PrivacyComponent} from "./pages/privacy/privacy.component";
import {TermsOfServiceComponent} from "./pages/terms-of-service/terms-of-service.component";
import {ThirdPartyLicensesComponent} from "./pages/third-party-licenses/third-party-licenses.component";
import {LicenseComponent} from "./pages/license/license.component";

const routes: Routes = [
  {
    path: 'privacy', component: PrivacyComponent
  },
  {
    path: 'tos', component: TermsOfServiceComponent
  },
  //{
  //  path: '', component: ThirdPartyLicensesComponent //Third party licenses
  //},
  {
    path: 'license', component: LicenseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliciesRoutingModule {
}
