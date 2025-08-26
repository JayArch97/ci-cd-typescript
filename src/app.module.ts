import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/user.model';
import { Tasks } from './tasks/tasks.model';
import { Case } from './cases/cases.model';
import { UserModule } from './user/user.module';
import { CasesModule } from './cases/cases.module';
import { TasksModule } from './tasks/tasks.module';
import { Connector, IpAddressTypes } from '@google-cloud/cloud-sql-connector';

const connector = new Connector();

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRootAsync({
      useFactory: async () => {
        const clientOpts = await connector.getOptions({
          instanceConnectionName: 'acostajulio-dev:us-central1:case-management-db',
          ipType: IpAddressTypes.PUBLIC,
        });

        return {
          dialect: 'postgres',
          // host/port can be omitted if clientOpts contains socketPath
          host: '34.31.185.218', // or remove if using socketPath
          port: 5432,
          username: 'julio',
          password: process.env.DATABASE_PASSWORD,
          database: process.env.DATABASE_NAME,
          models: [User, Tasks, Case],
          autoLoadModels: true,
          synchronize: true, 
          retryAttempts: 5, 
          retryDelay: 500,
          dialectOptions: {
            ...clientOpts, // This spreads ssl or stream options
            // Optionally, add more pg options here
          },
        };
      },
    }),
    UserModule, CasesModule, TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}