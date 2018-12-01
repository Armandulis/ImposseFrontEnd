import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Story } from '../models/story';
import {environment} from '../../../environments/environment';
import {AuthenticationService} from './authentication.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'})
};
@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getStories(): Observable<Story[]> {

    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<Story[]>(environment.apiURL + '/story', httpOptions);
  }

  createStory(story: Story): Observable<Story> {

    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.post<Story>(environment.apiURL + '/story', story, httpOptions );
  }

}
