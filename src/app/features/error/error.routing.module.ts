/*
 error.routing.module.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

//CORE IMPORTS
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//PAGE COMPONENTS
import {UnauthorizedComponent} from "./pages/unauthorized/unauthorized.component";
import {ForbiddenComponent} from "./pages/forbidden/forbidden.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {TooManyRequestsComponent} from "./pages/too-many-requests/too-many-requests.component";
import {BadGatewayComponent} from "./pages/bad-gateway/bad-gateway.component";
import {ServiceUnavailableComponent} from "./pages/service-unavailable/service-unavailable.component";

const routes: Routes = [
  {
    path: '', children: [
      {path: '401', component: UnauthorizedComponent},
      {path: '403', component: ForbiddenComponent},
      {path: '404', component: NotFoundComponent},
      {path: '429', component: TooManyRequestsComponent},
      {path: '502', component: BadGatewayComponent},
      {path: '503', component: ServiceUnavailableComponent},
      {path: '**', pathMatch: 'full', component: NotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule {
}
