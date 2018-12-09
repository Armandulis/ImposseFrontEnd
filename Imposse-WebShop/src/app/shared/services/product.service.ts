import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs";
import {Story} from "../models/story";
import {environment} from "../../../environments/environment";
import {Product} from "../models/product";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'})
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getProducts(): Observable<Product[]> {

    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<Product[]>(environment.apiURL + '/product', httpOptions);
  }

  createProduct(product: Product): Observable<Product> {

    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.post<Product>(environment.apiURL + '/product', product, httpOptions );
  }

}
