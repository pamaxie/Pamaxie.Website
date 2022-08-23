/*
 product.routing.module.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

//CORE IMPORTS
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//PAGE COMPONENTS
import {RegisterComponent} from "./pages/register/register.component";
import {LoginComponent} from "./pages/login/login.component";
import {CodeOfConductComponent} from "./pages/code-of-conduct/code-of-conduct.component";


const routes: Routes = [
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'coc', component: CodeOfConductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
