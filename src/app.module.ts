import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize'; 
import { User } from './user/user.model'
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}),
     SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'acostajulio-dev:us-central1:case-management-db',
      port: 5432,
      username: 'julio',
      password: 'Javascript1997!',
      database: 'case-management-db',
      models: [User],
      synchronize: true,
    }),
     UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
