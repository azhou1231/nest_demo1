import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  // JoinColumn,
} from 'typeorm';
import { GoodsDetail } from './goodsDetail.entity';

@Entity()
export class GoodsType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'type_name',
    type: 'varchar',
    length: 255,
    comment: '类型名称',
  })
  goodsType: string;

  @OneToMany(() => GoodsDetail, (goodsDetail) => goodsDetail.goodsType)
  // @JoinColumn({ name: 'id' })
  goodsDetails: GoodsDetail[];
}
