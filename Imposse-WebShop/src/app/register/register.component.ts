import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../shared/services/user.service';
import {LoginInput} from "../shared/models/loginInput";
import {Router} from "@angular/router";
import {BasketService} from "../shared/services/basket.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usernames : Array<string>;
  nameExists: boolean;
  loading = true;

  userForm = new FormGroup({
    username: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    picture: new FormControl('')
  });

  constructor(private userService: UserService, private router: Router, private basketService: BasketService) { }

  ngOnInit() {
    this.userService.getUsernames().subscribe( data => {
      this.usernames = data;
      this.loading = false;
    });
  }

  onKeyPress(){
    this.nameExists = this.usernames.includes(this.userForm.controls.username.value);
  }

  register(){
    const user = this.userForm.value;
         this.userService.createUser(user).subscribe(
           success => {
             let login = new LoginInput();
             login.username = this.userForm.controls.username.value;
             login.password = this.userForm.controls.password.value;
             this.userService.addUserPassword(login).subscribe(
               user => {
                 alert('You are registered, you can now log in');
                 this.router.navigate(['/login']);
               }
             );
           },
           error => {
             alert('something went wrong');
           });
  }

}
