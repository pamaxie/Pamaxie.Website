/*!
 home.routing.module.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./home.component";
import {DataPrivacyComponent} from "./pages/data-privacy/data-privacy.component";
import {DataDetectionComponent} from "./pages/data-detection/data-detection.component";
import {SafeSpaceComponent} from "./pages/safe-space/safe-space.component";
import {ImprovementsComponent} from "./pages/improvements/improvements.component";
import {ModerationComponent} from "./pages/moderation/moderation.component";
import {OpenSourceComponent} from "./pages/open-source/open-source.component";

const routes: Routes = [
  {
    path: '', children: [
      {path: 'data_privacy', component: DataPrivacyComponent},
      {path: 'data_detection', component: DataDetectionComponent},
      {path: 'safe_space', component: SafeSpaceComponent},
      {path: 'improvements', component: ImprovementsComponent},
      {path: 'moderation', component: ModerationComponent},
      {path: 'open_source', component: OpenSourceComponent},
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
