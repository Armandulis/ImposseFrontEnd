import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {DataSharingService} from '../../services/dataSharing.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  isUserLoggedIn: boolean;
  constructor(private authenticationService: AuthenticationService,
              private dataSharingService: DataSharingService) {

    this.dataSharingService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
    });
  }

  ngOnInit() {
    if (this.authenticationService.getToken()){
      this.isUserLoggedIn = true;
    }

  }

  logout(){
    this.authenticationService.logout();
  }

}
