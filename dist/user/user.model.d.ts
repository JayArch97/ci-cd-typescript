import { Model } from 'sequelize-typescript';
export declare class User extends Model<User> {
    first_name: string;
    last_name: string;
    email: string;
    user_name: string;
    password: string;
    is_active: boolean;
}
