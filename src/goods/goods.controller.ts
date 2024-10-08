import {
  Controller,
  Get,
  Post,
  Query,
  Inject,
  // Request,
  Param,
  // Headers,
  Body,
} from '@nestjs/common';
import { GoodsService } from './goods.service';
import { OrderService } from '../order/order.service';

// type Goods = {
//   id: number;
//   goodsname: string;
//   goodstype: string;
// };

@Controller('goods')
export class GoodsController {
  constructor(
    @Inject('goods') private goodsService: GoodsService,
    @Inject('goodsArray') private goodsArray: string,
    @Inject('factory') private goodsFactory: string,
    @Inject('config') private config: object,
    private orderService: OrderService,
  ) {}

  @Post('/addGoods')
  addGoods(@Body() body): any {
    console.log(body);
    const data = this.goodsService.addGoods(body);
    return {
      code: 0,
      data: data,
      msg: 'succeed',
    };
  }
  @Get('/deleteGoods/:id')
  deleteGoods(@Param() params): object {
    const id = parseInt(params.id);
    return this.goodsService.deleteGoods(id);
  }

  @Post('/updateGoods')
  updateGoods(@Body() body): any {
    return this.goodsService.updateGoods(body);
  }

  @Get()
  getGoods() {
    return this.goodsService.getGoods();
  }

  @Get('/getGoodsByName')
  getGoodsByName(@Query() query) {
    return this.goodsService.getGoodsByName(query.name);
  }
  @Get('/test')
  testInject() {
    return this.goodsArray;
  }
  @Get('/corsTest')
  corsTest(): object {
    return {
      code: '666',
      msg: '跨域测试',
    };
  }
  @Get('/test2')
  testInject2(): string {
    return this.orderService.findAll();
  }
  @Get('/test3')
  testInject3(): string {
    console.log(this.config);
    return this.config['msg'];
  }
}
