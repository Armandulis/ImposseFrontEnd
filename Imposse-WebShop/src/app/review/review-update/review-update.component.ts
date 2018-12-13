import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-review-update',
  templateUrl: './review-update.component.html',
  styleUrls: ['./review-update.component.css']
})
export class ReviewUpdateComponent implements OnInit {

  constructor() { }
  reviewForm = new FormGroup({
    userReviewId: new FormControl(''),
    productReviewId: new FormControl(''),
    comment: new FormControl(''),
    id: new FormControl(''),
    rating: new FormControl('')


  });

  ngOnInit() {
  }

}
