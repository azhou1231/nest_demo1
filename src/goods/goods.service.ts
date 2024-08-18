import { Injectable } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Goods } from './entities/goods.entity';

@Injectable()
export class GoodsService {
  constructor(
    @InjectRepository(Goods) private readonly goods: Repository<Goods>,
  ) {}

  addGoods(newGoods: Goods): any {
    const data = new Goods();
    data.goods_name = newGoods['goods_name'];
    data.goods_type = newGoods['goods_type'];
    data.price = newGoods['price'];
    return this.goods.save(data);
  }

  deleteGoods(id: number): any {
    return this.goods.delete(id);
  }

  updateGoods(newData: object): any {
    const id = newData['id'];
    const data = new Goods();
    data.goods_type = newData['goods_type'];
    data.price = newData['price'];
    return this.goods.update(id, data);
  }

  getGoods(): any {
    console.log('getGoods');
    return this.goods.find();
  }

  getGoodsByName(name: string): any {
    return this.goods.find({
      where: {
        goods_name: Like(`%${name}%`),
      },
    });
  }
}
