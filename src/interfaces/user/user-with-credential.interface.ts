import { User } from './user.interface';

export interface UserWithCredential {
  accessToken: string;
  user: User;
}
