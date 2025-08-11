import { User } from "./user.model";
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(first_name: string, last_name: string, email: string, user_name: string, password: string, is_active: boolean): Promise<User>;
}
