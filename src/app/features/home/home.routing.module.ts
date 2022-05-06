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
      {path: 'DataPrivacy', component: DataPrivacyComponent},
      {path: 'DataDetection', component: DataDetectionComponent},
      {path: 'SafeSpace', component: SafeSpaceComponent},
      {path: 'Improvements', component: ImprovementsComponent},
      {path: 'Moderation', component: ModerationComponent},
      {path: 'OpenSource', component: OpenSourceComponent},
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
