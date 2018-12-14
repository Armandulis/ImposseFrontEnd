import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthenticationService} from '../shared/services/authentication.service';

@Injectable()
export  class AuthGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router){}

  canActivate() {
    if (this.authenticationService.getToken()) {return true; }

    this.router.navigate(['/login']);
    return false;
  }

}
