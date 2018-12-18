import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AuthenticationService} from './authentication.service';
import {User} from '../models/user';
import {LoginInput} from "../models/loginInput";
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getUserByUsername(username: string): Observable<User> {

    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<User>(environment.apiURL + '/user/' + username,  httpOptions );
  }

  getUsernames(): Observable<Array<string>> {

    return this.http.get<Array<string>>(environment.apiURL + '/user/usernames');
  }

  getUsers(): Observable<User[]> {

    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<User[]>(environment.apiURL + '/user', httpOptions);
  }

  createUser(user: User): Observable<User>{
    //httpOptions.headers =
      //httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.post<User>(environment.apiURL + '/user', user);

  }



  addUserPassword(login: LoginInput): Observable<User>{
    return this.http.put<User>(environment.apiURL + '/user?password=true', login);
  }

  updateUSer(user: User): Observable<User>{
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.put<User>(environment.apiURL + '/user/' + user.id, user, httpOptions);
  }

  getUserFromToken(): Observable<User> {
    const username = this.authenticationService.getUsername()
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    if ( username != null) {
      return this.http.get<User>(environment.apiURL + '/user/' + username,  httpOptions );
    }

  }
}
