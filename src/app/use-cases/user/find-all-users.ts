import { User } from '../../models/user.model';

export type FindAllUsersRequestModel = {
  query?: number;
  limit?: number;
  offset?: number;
  order?: 'desc' | 'asc';
};

export interface FindAllUsersUseCase {
  findAll(requestModel?: FindAllUsersRequestModel): Promise<User[]>;
}
