import {Story} from './story';

export class User {
  id?: number;
  username?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  isAdmin?: boolean;
  picture?: string;
  stories?: Story[];
}
