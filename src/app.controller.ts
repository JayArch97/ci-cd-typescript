import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('case')
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get("filtered")
  findAll(): string {
    return 'This action returns all the cases filtered';
  }

}
