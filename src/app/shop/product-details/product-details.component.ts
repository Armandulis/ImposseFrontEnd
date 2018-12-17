import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../shared/services/product.service';
import {Product} from '../../shared/models/product';
import {User} from '../../shared/models/user';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {UserService} from '../../shared/services/user.service';
import {FormControl, FormGroup} from '@angular/forms';
import {forEach} from '@angular/router/src/utils/collection';
import {Review} from '../../shared/models/review';
import {ReviewService} from "../../shared/services/review.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  reviews: Review[];
  product: Product;
  review: Review;

  currentUser: User;
  startRating: number;
  averageRating: number;
  amountofReviews: number;

  reviewForm = new FormGroup( {
    user: new FormControl(''),
    product: new FormControl(''),
    comment: new FormControl(''),
    rating: new FormControl('')
  });

  productToUpdateForm = new FormGroup({
    nameToUpdate: new FormControl(''),
    pictureToUpdate: new FormControl(''),
    priceToUpdate: new FormControl(''),
    descriptionToUpdate: new FormControl(''),
    genderToUpdate: new FormControl(''),
    colorToUpdate: new FormControl(''),
    typeToUpdate: new FormControl('')
  });

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService,
              private reviewService: ReviewService,
              private authenticationService: AuthenticationService,
              private userService: UserService) { }

  ngOnInit() {
      this.getProduct();
      this.getCurrentUser();


  }

  getProduct() {
    this.startRating = 0;
    this.amountofReviews = 0;
    this.averageRating = 0;
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(productID => {
      this.product = productID;
      productID.reviews.forEach(review => {
        this.startRating = this.startRating + review.rating;
        this.amountofReviews++;
      });
      this.averageRating = this.startRating / this.amountofReviews;


      this.productToUpdateForm.patchValue({
        nameToUpdate: productID.name,
        pictureToUpdate: productID.picture,
        priceToUpdate: productID.price,
        descriptionToUpdate: productID.description,
        genderToUpdate: productID.gender,
        colorToUpdate: productID.color,
        typeToUpdate: productID.type
      });
    });

  }

  getCurrentUser(){
    if (this.authenticationService.getUsername() != null){

      this.userService.getUserByUsername(this.authenticationService.getUsername())
        .subscribe(usertoget => {
          this.currentUser = usertoget;
        });
    }

  }

  deleteProduct(id: number){
    this.productService.deleteProduct(id).subscribe(() =>
    { this.getProduct();
      alert('Product was deleted!');
      this.router.navigate(['/product']);});

  }

  updateProduct(){
    this.product.name = this.productToUpdateForm.get('nameToUpdate').value;
    this.product.picture = this.productToUpdateForm.get('pictureToUpdate').value;
    this.product.price = this.productToUpdateForm.get('priceToUpdate').value;
    this.product.description = this.productToUpdateForm.get('descriptionToUpdate').value;
    this.product.gender = this.productToUpdateForm.get('genderToUpdate').value;
    this.product.color = this.productToUpdateForm.get('colorToUpdate').value;
    this.product.type = this.productToUpdateForm.get('typeToUpdate').value;
    this.productService.updateProduct(this.product).subscribe(() => {this.getProduct();   alert('Product was updated!');});

  }
  createReview() {

    let review: Review;
    review = this.reviewForm.value;
    review.user = this.currentUser;
    review.product = this.product;
    this.reviewService.createReview(review).subscribe(() => {this.refresh(); } );
  }

  deleteReview(id: number){
    return this.reviewService.deleteReview(id).subscribe(()=>this.getProduct() );
  }
  refresh() {
    this.reviewService.getReviews().subscribe(listOfReviews => {this.reviews = listOfReviews; } );
  }


}
