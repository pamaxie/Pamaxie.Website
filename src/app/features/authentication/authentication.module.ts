import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {AuthenticationRoutingModule} from "./authentication.routing.module";
import {AuthenticationComponent} from "./authentication.component";
import {LoginComponent} from "./pages/login/login.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent
  ],
  imports: [
    AuthenticationRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AuthenticationComponent]
})
export class AuthenticationModule {
}
