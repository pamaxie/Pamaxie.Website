/*!
 app.module.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UrlSerializer} from "@angular/router";

import {LowerCaseUrlSerializer} from './core/utils/url-serializer.util';

import {AppRoutingModule} from './app.routing.module';
import {AppComponent} from './app.component';

import {HeaderComponent} from './core/components/header/header.component';
import {FooterComponent} from './core/components/footer/footer.component';
import {HomeModule} from "./features/home/home.module";
import {ErrorModule} from "./features/error/error.module";
import {AuthenticationModule} from "./features/authentication/authentication.module";
import {PrototypeFundComponent} from './core/components/logos/prototype-fund/prototype-fund.component';
import {BMBFComponent} from './core/components/logos/bmbf/bmbf.component';
import {PamaxieWNameComponent} from "./core/components/logos/pamaxie-w-name/pamaxie-w-name.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrototypeFundComponent,
    BMBFComponent,
    PamaxieWNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ErrorModule,
    AuthenticationModule
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
