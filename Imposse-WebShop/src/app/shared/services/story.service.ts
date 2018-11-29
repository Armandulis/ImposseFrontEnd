import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Story } from '../models/story';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private http: HttpClient) { }

  getStories(): Observable<Story[]> {

    return this.http.get<Story[]>('https://localhost:44327/api/Story');
  }

  createStory(story: Story): Observable<Story> {

    return this.http.post<Story>('https://localhost:44327/api/Story', story);
  }

}
