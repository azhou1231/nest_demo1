import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Goods {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'varchar', length: 255 })
  goods_name: string;

  @Column({ type: 'varchar' })
  goods_type: string;

  @Column({ type: 'int' })
  price: number;
}
