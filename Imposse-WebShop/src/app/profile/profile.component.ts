import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StoryService} from '../shared/services/story.service';
import {UserService} from '../shared/services/user.service';
import {AuthenticationService} from '../shared/services/authentication.service';
import {User} from '../shared/models/user';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileToUpdateForm = new FormGroup({
    pictureToUpdate: new FormControl(''),
    emailToUpdate: new FormControl(''),
    lastnameToUpdate: new FormControl(''),
    firstnameToUpdate: new FormControl(''),
  });

  user: User;
  constructor(private router: Router,
              private userService: UserService,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.userService.getUserByUsername(this.authenticationService.getUsername()).subscribe(userFromDB => {
      this.user = userFromDB;
      this.profileToUpdateForm.patchValue({
        pictureToUpdate: userFromDB.picture,
        lastnameToUpdate: userFromDB.lastname,
       firstnameToUpdate: userFromDB.firstname,
       emailToUpdate: userFromDB.email
        });
    });
  }

  updateUser(){
    this.user.firstname = this.profileToUpdateForm.get('firstnameToUpdate').value;
    this.user.lastname = this.profileToUpdateForm.get('lastnameToUpdate').value;
    this.user.email = this.profileToUpdateForm.get('emailToUpdate').value;
    this.user.picture = this.profileToUpdateForm.get('pictureToUpdate').value;

    this.userService.updateUSer(this.user).subscribe(() => {this.getUser(); alert('Profile was updated!');});
  }

}
