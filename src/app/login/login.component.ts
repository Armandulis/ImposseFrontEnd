import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../shared/services/authentication.service';
import {DataSharingService} from '../shared/services/dataSharing.service';
import {UserService} from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  errormessage = '';
  username = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private dataSharingService: DataSharingService,
              private userService: UserService
              ) { }

  ngOnInit() {
    this.authenticationService.logout();
    this.dataSharingService.isUserLoggedIn.next(false);
  }

  login() {

    this.loading = true;
    this.authenticationService.login(this.username.value, this.password.value)
      .subscribe(
        success => {
          this.dataSharingService.isUserLoggedIn.next(true);
          this.router.navigate(['/profile']);
        },
        error => {
          this.errormessage = error.message;
          this.loading = false;
          alert('Wrong username or password!');
        });
  }

}
