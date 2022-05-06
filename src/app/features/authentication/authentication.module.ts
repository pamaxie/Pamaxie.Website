import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {AuthenticationRoutingModule} from "./authentication.routing.module";
import {AuthenticationComponent} from "./authentication.component";

@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    AuthenticationRoutingModule,
    CommonModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AuthenticationComponent]
})
export class AuthenticationModule {
}
