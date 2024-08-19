import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { GoodsController } from './goods.controller';
import { GoodsService } from './goods.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Goods } from './entities/goods.entity';
import { CounterMiddleware } from '../counter/counter.middleware';
import { OrderService } from '../order/order.service';
@Module({
  imports: [TypeOrmModule.forFeature([Goods])],
  controllers: [GoodsController],
  providers: [
    OrderService,
    {
      provide: 'goods',
      useClass: GoodsService,
    },
    {
      provide: 'goodsArray',
      useValue: ['nike', 'adidas', 'nb'],
    },
    {
      provide: 'factory',
      useFactory: () => {
        console.log('usefactory-------------------');
        return 'useSucceed';
      },
    },
  ],
})
export class GoodsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CounterMiddleware)
      .forRoutes({ path: 'goods', method: RequestMethod.POST });
  }
}
