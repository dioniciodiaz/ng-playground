import { User } from './user';

export interface Post {
  id?: number;
  title: string;
  body: string;
  userId: number;
  user?: User;
}
