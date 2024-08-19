import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { GoodsType } from './goodsType.entity';

@Entity()
export class GoodsDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'goods_name', type: 'varchar', length: 255 })
  goodsName: string;

  @ManyToOne(() => GoodsType, (goodsType) => goodsType.goodsDetails)
  @JoinColumn({ name: 'goods_type' })
  goodsType: GoodsType;

  @Column({ type: 'int' })
  price: number;

  @CreateDateColumn({ type: 'timestamp' })
  createtime: Date;
}
