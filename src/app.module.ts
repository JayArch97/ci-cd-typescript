import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/user.model';
import { UserModule } from './user/user.module';
import { CasesModule } from './cases/cases.module';
import { TasksModule } from './tasks/tasks.module';


@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.HOST,
      port: 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: 'case_management_db',
      models: [User],
      autoLoadModels: true,
      synchronize: true, // disable in production
      retryAttempts: 5, 
      retryDelay: 2000
    }),UserModule, CasesModule, TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
