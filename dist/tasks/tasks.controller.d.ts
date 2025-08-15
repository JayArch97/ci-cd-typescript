import { Tasks } from './tasks.model';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(task: string, status: string, follow_up_time: Date, notes: string, attachment: boolean): Promise<Tasks>;
}
