/*
 home.routing.module.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */
//CORE IMPORTS
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//PAGE COMPONENTS
import {HomeComponent} from "./home.component";
import {DataDetectionComponent} from "./pages/data-detection/data-detection.component";
import {PricingComponent} from "./pages/pricing/pricing.component";
import {OpenSourceComponent} from "./pages/open-source/open-source.component";
import {DataPrivacyComponent} from "./pages/data-privacy/data-privacy.component";

const routes: Routes = [
  {
    path: '', children: [
      {path: 'data_detection', component: DataDetectionComponent},
      {path: 'pricing', component: PricingComponent},
      {path: 'open_source', component: OpenSourceComponent},
      {path: 'data_privacy', component: DataPrivacyComponent},
      {path: '', pathMatch: 'full', component: HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
