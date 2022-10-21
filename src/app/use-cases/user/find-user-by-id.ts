import { User } from '../../models/user.model';

export interface FindUserByIdUseCase {
  findById(id: number): Promise<User>;
}
