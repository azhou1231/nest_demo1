import {
  Controller,
  Get,
  Post,
  Query,
  Request,
  Param,
  Headers,
} from '@nestjs/common';
import { GoodsService } from './goods.service';

type Goods = {
  id: number;
  goodsname: string;
  goodstype: string;
};

@Controller('goods')
export class GoodsController {
  constructor(private goodsService: GoodsService) {}
  @Get('getGoodsList')
  getGoodsList(): any {
    return this.goodsService.getGoods();
  }
  @Post('addGoods')
  addGoods(@Request() req): any {
    this.goodsService.addGoods(req.body);
    return {
      code: 0,
      msg: 'succeed',
    };
  }
  @Get('getGoodsById')
  getGoodsById(@Query() query): any {
    console.log(query);
    const id: number = parseInt(query.id);
    const data: Goods = this.goodsService.getGoodsById(id);
    return {
      code: 0,
      data: data,
      msg: 'succeed',
    };
  }
  @Get('findGoodsById/:id/:name')
  findGoodsById(@Param() params, @Headers() header) {
    console.log(params.name);
    console.log(header);
    const id: number = parseInt(params.id);
    const data: Goods = this.goodsService.getGoodsById(id);
    return {
      code: 0,
      data: data,
      msg: 'succeed',
    };
  }
}
