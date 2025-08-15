import { Model } from 'sequelize-typescript';
export declare class Tasks extends Model<Tasks> {
    task: string;
    follow_up_time: Date;
    status: string;
    notes: string;
    attachment: string;
}
