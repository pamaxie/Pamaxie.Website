import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {ErrorRoutingModule} from "./error.routing.module";
import {ErrorComponent} from "./error.component";
import {ErrorPageComponent} from "./components/error-page/error-page.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {UnauthorizedComponent} from "./pages/unauthorized/unauthorized.component";
import {ForbiddenComponent} from "./pages/forbidden/forbidden.component";
import {TooManyRequestsComponent} from "./pages/too-many-requests/too-many-requests.component";
import {BadGatewayComponent} from "./pages/bad-gateway/bad-gateway.component";
import {ServiceUnavailableComponent} from "./pages/service-unavailable/service-unavailable.component";

@NgModule({
  declarations: [
    ErrorComponent,
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
  bootstrap: [ErrorComponent]
})
export class ErrorModule {
}
