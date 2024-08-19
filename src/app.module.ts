import { Module } from '@nestjs/common';
import { GoodsModule } from './goods/goods.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from './order/order.module';
import { ConfigModule } from './config/config.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123456789',
      database: 'test-core',
      retryDelay: 500,
      retryAttempts: 5,
      synchronize: true,
      autoLoadEntities: true,
    }),
    GoodsModule,
    OrderModule,
    ConfigModule.forRoot('Omg'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
