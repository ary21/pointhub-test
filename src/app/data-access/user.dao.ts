import { UserDTO } from "../use-cases/user/create-user";
import { UserEntity } from "../../infrastructure/repositories/type-orm/entities/user.entity";
import { AppDataSource } from "../../infrastructure/repositories/type-orm/dataSource";

// TODO : can improve, this for better clean arc should not depend on infra
const userRepository = AppDataSource.getRepository(UserEntity);

export const findAll = async () => {
  return userRepository.find();
}

export const findOne = async (filter = {}) => {
  return userRepository.findOneBy(filter);
}

export const insert = async (user: UserDTO) => {
  return userRepository.save(user);
}

export const update = async (id: number, userData: UserDTO) => {
  const user = await userRepository.findOneBy({ id });
  userRepository.merge(user, userData);
  return userRepository.save(user);
}

export const remove = async (id: number) => {
  return userRepository.delete({ id });
}