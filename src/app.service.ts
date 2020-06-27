import { Injectable, Scope, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core'

@Injectable({ scope: Scope.REQUEST })
export class AppService {

  constructor(@Inject(REQUEST) request: any) {
    console.log(request) //undefined
  }

  getHello(): string {
    return 'Hello World!';
  }
}
