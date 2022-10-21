import { User } from '../../../../app/models/user.model';
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity implements User {
  @PrimaryGeneratedColumn()
  id: number
  
  @Column()
  name: string
  
  @Column({
    length: 20,
  })
  phone: string;
  
  @Column({
    length: 100,
  })
  email: string;
}