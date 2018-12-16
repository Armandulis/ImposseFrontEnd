import { Component, OnInit } from '@angular/core';
import {Review} from "../../shared/models/review";
import {ReviewService} from "../../shared/services/review.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {



  reviews: Review[];

  reviewForm = new FormGroup( {
    id: new FormControl(''),
    user: new FormControl(''),
    product: new FormControl(''),
    rating: new FormControl(''),
    comment: new FormControl(''),
  });

  constructor(private reviewsservice: ReviewService) { }
  ngOnInit() {
    this.reviewsservice.getReviews().subscribe  (listReviews => {this.reviews = listReviews; });

  }
  refresh() {
    this.reviewsservice.getReviews().subscribe(listOfStories => {this.reviews = listOfStories; } );
  }
}
