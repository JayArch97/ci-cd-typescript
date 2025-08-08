import { User } from "./user.model";
import { Sequelize } from "sequelize-typescript";
export declare class UserService {
    private userModel;
    private sequelize;
    constructor(userModel: typeof User, sequelize: Sequelize);
    createEmployee(name: string, lastName: string, isActive: boolean): Promise<User>;
}
