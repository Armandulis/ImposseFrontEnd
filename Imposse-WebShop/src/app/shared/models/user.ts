import {Story} from './story';
import {Review} from './review';

export class User {
  id?: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  isAdmin?: boolean;
  picture: string;
  stories?: Story[];
  reviews?: Review[];
}
