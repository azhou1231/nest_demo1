import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { GoodsController } from './goods.controller';
import { GoodsService } from './goods.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoodsType } from './entities/goodsType.entity';
import { GoodsDetail } from './entities/goodsDetail.entity';
import { CounterMiddleware } from '../counter/counter.middleware';
import { OrderService } from '../order/order.service';
@Module({
  imports: [TypeOrmModule.forFeature([GoodsType, GoodsDetail])],
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
        console.log('usefactory-------------------' + GoodsType);
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
