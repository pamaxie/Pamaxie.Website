import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {HomeRoutingModule} from './home.routing.module';
import {HomeComponent} from "./home.component";
import {HeaderComponent} from "./components/header/header.component";
import {FootnoteComponent} from "./components/footnote/footnote.component";
import {FeaturesComponent} from "./components/features/features.component";
import {FeatureCardComponent} from "./components/feature-card/feature-card.component";
import {DataDetectionComponent} from "./pages/data-detection/data-detection.component";
import {FeaturePageComponent} from "./components/feature-page/feature-page.component";
import {DataPrivacyComponent} from "./pages/data-privacy/data-privacy.component";
import {SafeSpaceComponent} from "./pages/safe-space/safe-space.component";
import {ImprovementsComponent} from "./pages/improvements/improvements.component";
import {ModerationComponent} from "./pages/moderation/moderation.component";
import {OpenSourceComponent} from "./pages/open-source/open-source.component";

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FeaturesComponent,
    FootnoteComponent,
    FeatureCardComponent,
    FeaturePageComponent,
    DataPrivacyComponent,
    DataDetectionComponent,
    SafeSpaceComponent,
    ImprovementsComponent,
    ModerationComponent,
    OpenSourceComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule
  ],
  exports: [],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule {
}
