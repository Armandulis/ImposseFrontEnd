import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Product} from '../models/product';
import {Story} from '../models/story';




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

  getPagingProducts(page: number): Observable<Product[]> {

    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<Product[]>(environment.apiURL + '/products?currentpage=' + page + '&itemsperpage=20', httpOptions);
  }

  getAllProducts(): Observable<Product[]> {

    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<Product[]>(environment.apiURL + '/products', httpOptions);
  }

  getProduct(id: number): Observable<Product>{
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<Product>(environment.apiURL + '/products/' + id, httpOptions);
  }

  deleteProduct(id: number){

    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.delete(environment.apiURL + '/products/' + id, httpOptions);

  }

  updateProduct(product: Product): Observable<Product>{
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.put<Product>(environment.apiURL + '/products/' + product.id, product, httpOptions);
  }
  createProduct(product: Product): Observable<Product>{
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.post<Product>(environment.apiURL + '/products', product, httpOptions);
  }

}
