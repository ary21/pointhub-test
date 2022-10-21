import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserEntity } from "./entities/user.entity"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "admin",
  database: "test",
  entities: [UserEntity],
  synchronize: true,
  logging: false,
});