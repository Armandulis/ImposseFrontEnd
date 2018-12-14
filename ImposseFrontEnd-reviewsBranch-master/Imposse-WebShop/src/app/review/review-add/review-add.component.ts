import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ReviewService} from "../../shared/services/review.service";
import {Review} from "../../shared/models/review";
import {Router} from "@angular/router";

@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.css']
})
export class ReviewAddComponent implements OnInit {

  reviewForm = new FormGroup( {
    userReviewId: new FormControl(''),
    productReviewId: new FormControl(''),
    comment: new FormControl(''),
    id: new FormControl(''),
    rating: new FormControl('')
  });
  constructor(private reviewsservice: ReviewService,
              private router: Router) { }
  reviews: Review[];
  refresh() {
    this.reviewsservice.getReviews().subscribe(listOfStories => {this.reviews = listOfStories; } );
  }
  createReview() {

    const review = this.reviewForm.value ;

    this.reviewsservice.createReview(review).subscribe(() => {this.refresh(); } );
  }
  ngOnInit() {}

}
