import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import {Product} from '../../shared/models/product';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

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

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(list => this.products = list);
  }
  createProduct(){
    this.product = this.productForm.value;
    this.productService.createProduct(this.product).subscribe(() => this.getAllProducts());

  }

}
