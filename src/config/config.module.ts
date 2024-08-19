import { DynamicModule, Global, Module } from '@nestjs/common';

@Global()
@Module({})
export class ConfigModule {
  static forRoot(option: string): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: 'config',
          useValue: {
            msg: `${option}configGlobalInject`,
            code: 201,
          },
        },
      ],
      exports: [
        {
          provide: 'config',
          useValue: {
            msg: `${option}configGlobalInject`,
            code: 201,
          },
        },
      ],
    };
  }
}
