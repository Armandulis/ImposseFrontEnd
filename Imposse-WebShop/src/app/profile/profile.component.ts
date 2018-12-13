import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StoryService} from '../shared/services/story.service';
import {UserService} from '../shared/services/user.service';
import {AuthenticationService} from '../shared/services/authentication.service';
import {User} from '../shared/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  constructor(private router: Router,
              private userService: UserService,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.userService.getUserByUsername(this.authenticationService.getUsername()).subscribe(userFromDB => this.user = userFromDB);
  }

}
