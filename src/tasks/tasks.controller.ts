import { Body, Controller, Post } from '@nestjs/common';
import { Tasks } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Post()
    async create(
    @Body('task') task: string,
    @Body('status') status: string,
    @Body('follow_up_time') follow_up_time: Date, 
    @Body('notes') notes: string,
    @Body('attachment') attachment: boolean,    
    ) : Promise<Tasks> {
        return this.tasksService.createTasks( task, status, follow_up_time, notes, attachment);
    }
}
