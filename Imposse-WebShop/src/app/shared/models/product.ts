import {Review} from './review';

export class Product {
  id?: number;
  name: string;
  picture: string;
  price: number;
  description: string;
  gender?: string;
  color: string;
  type?: string;
  reviews?: Review[];
}
