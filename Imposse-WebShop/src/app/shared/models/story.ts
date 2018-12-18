import {User} from './user';

export class Story {
  id?: number;
  date?: string;
  title: string;
  text: string;
  user: User;
}
