import { Injectable } from '@nestjs/common';
import { Tasks } from './tasks.model';
import { Sequelize } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';
import { CreationAttributes } from "sequelize";


@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Tasks) private tasksModel: typeof Tasks,
    private sequelize: Sequelize,
  ) {}

  async createTasks(
    task: string,
    status: string,
    follow_up_time: Date, 
    notes: string,
    attachment: boolean
  ): Promise<Tasks> {
    return this.tasksModel.create({
        task: task,
        status: status,
        follow_up_time: follow_up_time,
        notes: notes,
        attachment: attachment
    } as unknown as CreationAttributes<Tasks>);  
  }
}
