import { User } from "./user.model";
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(firstName: string, lastName: string, isActive: boolean): Promise<User>;
}
