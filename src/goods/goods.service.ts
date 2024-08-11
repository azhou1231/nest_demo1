import { Injectable } from '@nestjs/common';

@Injectable()
export class GoodsService {
  getGoods() {
    return {
      code: 1,
      goodlist: ['nike', 'Adidas', 'puma'],
      msg: 'succeed',
    };
  }
  addGoods(newgoods: object): void {
    console.log('addsuccess: ', newgoods);
  }
  getGoodsById(id: number) {
    let goods: any = {};
    switch (id) {
      case 1:
        goods = {
          good: { id: 1, goodsname: 'nike', goodstype: 'shoes' },
        };
        break;
      case 2:
        goods = {
          good: { id: 2, goodsname: 'adidas', goodstype: 'cloth' },
        };
        break;
      case 3:
        goods = {
          good: { id: 3, goodsname: 'puma', goodstype: 'hat' },
        };
        break;
    }
    return goods;
  }
}
