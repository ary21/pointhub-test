import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserEntity } from "./entities/user.entity"

export const AppDataSource = new DataSource({
  type: "postgres",
  ssl: true,
  url: process.env.DB_URL,
  entities: [UserEntity],
  synchronize: true,
  logging: false,
});