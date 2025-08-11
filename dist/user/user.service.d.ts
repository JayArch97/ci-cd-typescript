import { User } from "./user.model";
import { Sequelize } from "sequelize-typescript";
export declare class UserService {
    private userModel;
    private sequelize;
    constructor(userModel: typeof User, sequelize: Sequelize);
    createEmployee(first_name: string, email: string, last_name: string, user_name: string, password: string, is_active: boolean): Promise<User>;
}
