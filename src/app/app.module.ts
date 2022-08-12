/*
 app.module.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

//CORE IMPORTS
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UrlSerializer} from "@angular/router";

//APP IMPORTS
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';

//PROVIDER IMPORTS
import {LowerCaseUrlSerializer} from './core/utils/url-serializer.util';

//CORE COMPONENT IMPORTS
import {HeaderComponent} from './core/components/header/header.component';
import {FooterComponent} from './core/components/footer/footer.component';

//LOGO IMPORTS
import {PamaxieWNameComponent} from "./core/components/logos/pamaxie-w-name/pamaxie-w-name.component";
import {PrototypeFundComponent} from './core/components/logos/prototype-fund/prototype-fund.component';
import {BMBFComponent} from './core/components/logos/bmbf/bmbf.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PamaxieWNameComponent,
    PrototypeFundComponent,
    BMBFComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: UrlSerializer,
      useClass: LowerCaseUrlSerializer
    }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
