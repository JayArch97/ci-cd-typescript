import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from "@nestjs/common";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('isActive') isActive: boolean,
  ): Promise<User> {
    return this.userService.createEmployee(firstName, lastName, isActive);
  }
}

