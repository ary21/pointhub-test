import { UserDTO } from "../use-cases/user/create-user";
import { UserEntity } from "../../infrastructure/repositories/type-orm/entities/user.entity";
import { AppDataSource } from "../../infrastructure/repositories/type-orm/dataSource";

export default function userDao({ Users }) {
  const userRepository = AppDataSource.getRepository(UserEntity);

  async function findAll() {
    return userRepository.find();
  }

  async function findOne(filter = {}) {
    return userRepository.findOne(filter);
  }

  async function insert(user: UserDTO) {
    return userRepository.save(user);
  }

  async function update(id: number, userData: UserDTO) {
    const user = await userRepository.findOneBy({ id });
    userRepository.merge(user, userData);
    return userRepository.save(user);
  }

  async function remove(id: number) {
    return userRepository.delete({ id });
  }

  return Object.freeze({
    findAll,
    findOne,
    insert,
    update,
    remove,
  });
}