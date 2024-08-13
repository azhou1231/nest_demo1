import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Goods {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  goods_name: string;

  @Column({ type: 'varchar' })
  goods_type: string;

  @Column({ type: 'int' })
  price: number;

  @CreateDateColumn({ type: 'timestamp' })
  createtime: Date;
}
