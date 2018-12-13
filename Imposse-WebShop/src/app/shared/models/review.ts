import {Product} from './product';

export class Review {
  id: number;
  userReviewId: number;
  productReviewId: Product;
  comment: string;
  rating: number;
}
