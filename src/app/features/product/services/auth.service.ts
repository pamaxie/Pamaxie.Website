/*
 auth.service.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/
 Copyright © Pamaxie™ 2021 all rights reserved
 */

import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {
  }

  //TODO This is not the correct way of managing authentication, but it lets me go around and test stuff before it gets implemented.
  login(email: string, password: string) {
    localStorage.setItem('token', 'secretTestToken');
    // noinspection JSIgnoredPromiseFromCall
    //this.router.navigate(['/']);
  }

  logout() {
    localStorage.removeItem('token');
    // noinspection JSIgnoredPromiseFromCall
    //this.router.navigate(['/']);
  }

  public isLoggedIn(): boolean {
    let hasToken = false;
    if (localStorage.getItem('token') == 'secretTestToken'){
      hasToken = true;
    }
    return hasToken;
  }

  isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
