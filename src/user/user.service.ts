import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./user.model";
import { Sequelize } from "sequelize-typescript";
import { CreationAttributes } from "sequelize"; // <- Import this

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private sequelize: Sequelize,
  ) {}

  async createEmployee(
    first_name: string,
    email: string,
    last_name: string,
    user_name: string, 
    password: string,
    is_active: boolean
  ): Promise<User> {
    return this.userModel.create({
      first_name: first_name,
      last_name: last_name,
      email: email,
      user_name: user_name, 
      password: password, 
      is_active: is_active,
    } as CreationAttributes<User>);  
  }
}