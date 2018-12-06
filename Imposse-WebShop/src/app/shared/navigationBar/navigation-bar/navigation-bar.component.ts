import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  loginbutton = 'Login';
  loggedIn: boolean;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.checkIfLoggedIn();

  }
  checkIfLoggedIn() {

    if (this.authenticationService.getToken() == null) {
      this.loggedIn = false;
      this.loginbutton = 'Login';
    } else { this.loggedIn = true; this.loginbutton = 'Profile'; }
  }

}
