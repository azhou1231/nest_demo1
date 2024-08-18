import { Module } from '@nestjs/common';
import { GoodsController } from './goods.controller';
import { GoodsService } from './goods.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Goods } from './entities/goods.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Goods])],
  controllers: [GoodsController],
  providers: [
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
export class GoodsModule {}
