import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//test this 
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(process.env.PORT || 8081 );

}
bootstrap()