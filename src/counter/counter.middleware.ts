/* eslint-disable*/
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CounterMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('局部中间件----------------------');
    res.send('禁止访问！');
    // next();
  }
}
