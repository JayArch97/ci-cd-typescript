import { Body, Controller, Post } from "@nestjs/common";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(
    @Body('first_name') first_name: string,
    @Body('last_name') last_name: string,
    @Body('email') email: string,
    @Body('user_name') user_name: string, 
    @Body('password') password: string, 
    @Body('is_active') is_active: boolean,
  ): Promise<User> {
    return this.userService.createEmployee(first_name, last_name, email, user_name, password, is_active);
  }
}

