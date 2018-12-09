import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../shared/models/product";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productForm = new FormGroup( {
  Name: new FormControl(''),
  Picture: new FormControl(''),
  Price:  new FormControl(''),
  Gender:  new FormControl(''),
  Color:  new FormControl(''),
  Type:  new FormControl(''),
  Review:  new FormControl(''),
  });

  constructor(private productService: ProductService,
              private router: Router) { }
  products: Product[];

  refresh() {
    this.productService.getProducts().subscribe(listOfProducts => {this.products = listOfProducts; } );
  }
  createProduct() {

    const product = this.productForm.value ;

    this.productService.createProduct(product).subscribe(() => {this.refresh(); } );
  }
  ngOnInit() {}

}
