import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UrlSerializer} from "@angular/router";

import {LowerCaseUrlSerializer} from './core/utils/url-serializer.util';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HeaderComponent} from './core/components/header/header.component';
import {FooterComponent} from './core/components/footer/footer.component';
import {DropdownComponent} from './core/components/dropdown/dropdown.component';
import {HomeModule} from "./features/home/home.module";
import {ErrorModule} from "./features/error/error.module";
import {AuthenticationModule} from "./features/authentication/authentication.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DropdownComponent
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
