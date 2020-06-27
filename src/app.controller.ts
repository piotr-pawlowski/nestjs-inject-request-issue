import { Controller, Get } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly moduleRef: ModuleRef) {}

  @Get()
  async getHello(): Promise<string> {
    return (await this.moduleRef.resolve(AppService)).getHello()
  }
}
