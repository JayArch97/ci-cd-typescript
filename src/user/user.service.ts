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
    name: string,
    lastName: string,
    isActive: boolean
  ): Promise<User> {
    return this.userModel.create({
      firstName: name,
      lastName: lastName,
      isActive: isActive,
    } as CreationAttributes<User>);   // <-- use CreationAttributes<User>
  }
}