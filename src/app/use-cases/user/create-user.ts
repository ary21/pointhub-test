import { User } from '../../models/user.model';

export type UserDTO = Omit<User, 'id'>;

export interface CreateUserUseCase {
  create(userData: UserDTO): Promise<User> | never;
}
