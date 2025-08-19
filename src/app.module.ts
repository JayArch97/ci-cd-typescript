import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/user.model';
import { Tasks } from './tasks/tasks.model';
import { UserModule } from './user/user.module';
import { CasesModule } from './cases/cases.module';
import { TasksModule } from './tasks/tasks.module';
import { cas } from './cases/cases.module';



@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: '34.31.185.218',
      port: 5432,
      username: 'julio',
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      models: [User, Tasks, ],
      autoLoadModels: true,
      synchronize: true, 
      retryAttempts: 5, 
      retryDelay: 500
    }),UserModule, CasesModule, TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
