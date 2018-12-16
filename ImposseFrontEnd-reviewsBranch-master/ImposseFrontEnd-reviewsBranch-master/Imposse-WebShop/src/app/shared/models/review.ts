import {Product} from './product';
import {User} from "./user";

export class Review {
  id: number;
  user: User;
  product: Product;
  rating: number;
  comment: string;

}
