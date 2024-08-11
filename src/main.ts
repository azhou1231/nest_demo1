/*
 * @Author: yz.chai
 * @Date: 2024-08-07 01:16:35
 * @LastEditors: yz.chai
 * @LastEditTime: 2024-08-07 02:32:07
 * @FilePath: \nestdemo\src\main.ts
 * @Description:
 * Copyright (c) 2024 by chaiyanzhou, All Rights Reserved.
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('testapi');
  await app.listen(3000);
}
bootstrap();
