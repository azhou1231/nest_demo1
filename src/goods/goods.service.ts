import { Injectable } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { GoodsType } from './entities/goodsType.entity';

@Injectable()
export class GoodsService {
  constructor(
    @InjectRepository(GoodsType) private readonly goods: Repository<GoodsType>,
  ) {}

  addGoods(newGoods: GoodsType): any {
    const data = new GoodsType();
    // data.goods_name = newGoods['goods_name'];
    data.goodsType = newGoods['goods_type'];
    // data.price = newGoods['price'];
    return this.goods.save(data);
  }

  deleteGoods(id: number): any {
    return this.goods.delete(id);
  }

  updateGoods(newData: object): any {
    const id = newData['id'];
    const data = new GoodsType();
    data.goodsType = newData['goods_type'];
    // data.price = newData['price'];
    return this.goods.update(id, data);
  }

  getGoods(): any {
    console.log('getGoods');
    return this.goods.find();
  }

  getGoodsByName(name: string): any {
    return this.goods.find({
      where: {
        goodsType: Like(`%${name}%`),
      },
    });
  }
}
