import { Module } from '@nestjs/common';
import { GoodsModule } from './goods/goods.module';
import { TypeOrmModule } from '@nestjs/typeorm';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
