import { Model } from 'sequelize-typescript';
export declare class Case extends Model<Case> {
    case_id: string;
    status: string;
    title: string;
    description: string;
}
