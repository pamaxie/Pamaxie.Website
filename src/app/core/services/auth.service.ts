import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "src/environments/environment";
import {User} from "src/app/core/models";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(/*private http: HttpClient*/) {
  }

  login(email: string, password: string) {
    //return this.http.post<User>(environment.api_endpoint + 'user/login', {email, password});
  }

  logout() {
  }

  public isLoggedIn(): boolean {
    return false;
  }

  isLoggedOut(): boolean {
    return false;
  }
}
