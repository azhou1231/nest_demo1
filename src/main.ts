import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('testapi');
  app.use(cors());
  app.use(MiddlewareGloble);
  await app.listen(3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
function MiddlewareGloble(req: any, res: any, next: () => void) {
  console.log('全局中间件-----------------');
  next();
}

bootstrap();
