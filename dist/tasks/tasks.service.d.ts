import { Tasks } from './tasks.model';
import { Sequelize } from 'sequelize-typescript';
export declare class TasksService {
    private tasksModel;
    private sequelize;
    constructor(tasksModel: typeof Tasks, sequelize: Sequelize);
    createTasks(task: string, status: string, follow_up_time: Date, notes: string, attachment: boolean): Promise<Tasks>;
}
