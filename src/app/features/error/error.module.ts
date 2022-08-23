/*
 error.module.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

//CORE IMPORTS
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

//ERROR IMPORTS
import {ErrorRoutingModule} from "./error.routing.module";

//COMPONENT IMPORTS
import {ErrorPageComponent} from "./components/error-page/error-page.component";

//CHILD COMPONENT IMPORTS
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {UnauthorizedComponent} from "./pages/unauthorized/unauthorized.component";
import {ForbiddenComponent} from "./pages/forbidden/forbidden.component";
import {TooManyRequestsComponent} from "./pages/too-many-requests/too-many-requests.component";
import {BadGatewayComponent} from "./pages/bad-gateway/bad-gateway.component";
import {ServiceUnavailableComponent} from "./pages/service-unavailable/service-unavailable.component";

@NgModule({
  declarations: [
    ErrorPageComponent,
    ForbiddenComponent,
    UnauthorizedComponent,
    NotFoundComponent,
    TooManyRequestsComponent,
    BadGatewayComponent,
    ServiceUnavailableComponent
  ],
    imports: [
        ErrorRoutingModule,
        CommonModule
    ],
  exports: [ErrorPageComponent],
  providers: [],
  bootstrap: []
})
export class ErrorModule {
}
