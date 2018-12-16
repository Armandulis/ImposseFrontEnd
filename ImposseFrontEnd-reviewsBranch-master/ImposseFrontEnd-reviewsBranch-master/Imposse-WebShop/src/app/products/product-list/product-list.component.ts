import { Component, OnInit } from '@angular/core';
import {Story} from "../../shared/models/story";
import {FormControl, FormGroup} from "@angular/forms";
import {StoryService} from "../../shared/services/story.service";
import {Product} from "../../shared/models/product";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  productForm = new FormGroup( {
    Name: new FormControl(''),
    Picture: new FormControl(''),
    Price:  new FormControl(''),
    Gender:  new FormControl(''),
    Color:  new FormControl(''),
    Type:  new FormControl(''),
    Review:  new FormControl(''),
  });



  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.productService.getAllProducts().subscribe(listOfProducts => {this.products = listOfProducts; } );
  }




}
