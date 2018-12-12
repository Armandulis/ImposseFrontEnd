import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../shared/services/authentication.service';

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
              ) { }

  ngOnInit() {
    this.authenticationService.logout();
  }

  login() {

    this.loading = true;
    this.authenticationService.login(this.username.value, this.password.value)
      .subscribe(
        success => {
          this.router.navigate(['/profile']);
        },
        error => {
          this.errormessage = error.message;
          this.loading = false;
          alert('Wrong username or password!');
        });
  }

}
