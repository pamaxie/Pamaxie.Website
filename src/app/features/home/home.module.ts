/*
 home.module.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

//CORE IMPORTS
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";

//HOME IMPORTS
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from './home.routing.module';

//CHILD COMPONENT IMPORTS
import {DataDetectionComponent} from "./pages/data-detection/data-detection.component";
import {PricingComponent} from "./pages/pricing/pricing.component";
import {OpenSourceComponent} from "./pages/open-source/open-source.component";
import {DataPrivacyComponent} from "./pages/data-privacy/data-privacy.component";

@NgModule({
    declarations: [
        HomeComponent,
        DataDetectionComponent,
        PricingComponent,
        OpenSourceComponent,
        DataPrivacyComponent
    ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    SharedModule
  ],
  exports: [],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule {
}
