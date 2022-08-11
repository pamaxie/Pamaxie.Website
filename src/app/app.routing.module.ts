/*!
 app.routing.module.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'policies',
    loadChildren: () => import('./features/policies/policies.module').then(m => m.PoliciesModule)
  },
  //{
  //  path: '',
  //  loadChildren: () => import('./features/authentication/authentication.module').then(m => m.AuthenticationModule)
  //},
  {
    path: '',
    loadChildren: () => import('./features/error/error.module').then(m => m.ErrorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
