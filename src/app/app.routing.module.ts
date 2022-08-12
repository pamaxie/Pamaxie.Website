/*
 app.routing.module.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

//CORE IMPORTS
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'resources',
    loadChildren: () => import('./features/resources/resources.module').then(m => m.ResourcesModule)
  },
  {
    path: 'company',
    loadChildren: () => import('./features/company/company.module').then(m => m.CompanyModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'policies',
    loadChildren: () => import('./features/policies/policies.module').then(m => m.PoliciesModule)
  },
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
