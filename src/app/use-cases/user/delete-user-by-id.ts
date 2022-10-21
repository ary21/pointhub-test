export interface DeleteUserByIdUseCase {
  deleteById(id: number): Promise<number> | never;
}
