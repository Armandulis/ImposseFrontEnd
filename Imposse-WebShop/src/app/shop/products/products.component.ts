import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import {Product} from '../../shared/models/product';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/user';
import {AuthenticationService} from '../../shared/services/authentication.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  currentPage = 1;

  user: User;

  product: Product;
  productForm = new FormGroup({
    name: new FormControl(''),
    picture: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    gender: new FormControl(''),
    color: new FormControl(''),
    type: new FormControl('')
  });

  constructor(private productService: ProductService, private userService: UserService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.getPagingProducts();
  }

  nextPage(){
    this.currentPage++;
    this.getPagingProducts();
  }

  previousPage(){
    this.currentPage--;
    this.getPagingProducts();
  }

  getPagingProducts(){
    this.productService.getPagingProducts(this.currentPage).subscribe(list => this.products = list);
    if (this.authenticationService.getToken() != null){
    this.userService.getUserFromToken().subscribe(user => this.user = user);}
  }
  createProduct() {
    this.product = this.productForm.value;
    this.productService.createProduct(this.product).subscribe(() => {
      this.getPagingProducts(); alert('Product was created');
    });

  }

}
