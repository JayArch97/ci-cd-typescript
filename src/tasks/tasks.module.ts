import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { TasksController } from './tasks.controller';
import { Tasks} from './tasks.model'

@Module({
    imports: [SequelizeModule.forFeature([Tasks])],
    providers: [TasksService],
    controllers: [TasksController]
})
export class TasksModule {}

