import {Product} from './product';
import {User} from "./user";

export class Review {
  id: number;
  userReviewId: User;
  productReviewId: Product;
  comment: string;
  rating: number;
}
