import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(environment.apiURL + '/token', { username, password })
      .pipe(map(response => {
        const token =  response.token;
        // login successful if there's a jwt token in the response
        if (token) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          sessionStorage.setItem('currentUser', JSON.stringify({username: username, token: token }));
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      }));
  }

  getToken(): string {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    return currentUser && currentUser.token;
  }

  getUsername(): string {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    return currentUser && currentUser.username;
  }

  logout(): void {
    // remove user from local storage to log user out
    sessionStorage.removeItem('currentUser');
  }
}
