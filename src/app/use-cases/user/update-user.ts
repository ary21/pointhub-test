import { UserDTO } from "./create-user";

export interface UpdateUserUseCase {
  update(
    id: number,
    updateUserRequestModel: UserDTO,
  ): Promise<number> | never;
}
