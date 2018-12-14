import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";
import {User} from "../models/user";
import {Observable} from "rxjs";
import {Basket} from "../models/basket";
import {environment} from "../../../environments/environment";
import {Product} from "../models/product";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'}),
  body : null
};

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getBasket(user: User): Observable<Basket>{
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<Basket>(environment.apiURL + '/basket/' + user.id, httpOptions);
  }

  addToBasket(product: Product, id: number){
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.put(environment.apiURL + '/basket/' + id, product, httpOptions);
  }

  deleteFromBasket(product: Product, id:number){
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    httpOptions.body = product;

    return this.http.delete(environment.apiURL + '/basket/' + id, httpOptions)
  }

  emptyBasket(id:number){
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.put(environment.apiURL + '/basket/' + id + '?clear=true', {})
  }
}
