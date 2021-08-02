import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { NoonPaymentService } from '@app/services';
import axios from 'axios';
import {
  NoonModuleAsyncOptions,
  NoonModuleOptions,
  NoonModuleOptionsFactory,
} from '@app/interfaces';
import { NOON_AXIOS_INSTANCE_TOKEN, NOON_MODULE_OPTIONS_TOKEN } from '@app/noon-constants';

@Global()
@Module({
  providers: [NoonPaymentService],
  exports: [NoonPaymentService],
})
export class NoonPaymentModule {
  static register(options: NoonModuleOptions): DynamicModule {
    return {
      module: NoonPaymentModule,
      providers: [
        {
          provide: NOON_AXIOS_INSTANCE_TOKEN,
          useValue: axios.create(),
        },
        {
          provide: NOON_MODULE_OPTIONS_TOKEN,
          useValue: options,
        },
      ],
    };
  }


  static registerAsync(options: NoonModuleAsyncOptions): DynamicModule {
    return {
      module: NoonPaymentModule,
      imports: options.imports,
      providers: [
        ...this.createAsyncProviders(options),
        {
          provide: NOON_AXIOS_INSTANCE_TOKEN,
          useFactory: (_: NoonModuleOptions) => axios.create(),
          inject: [NOON_MODULE_OPTIONS_TOKEN],
        },
        ...(options.extraProviders || []),
      ],
    };
  }


  private static createAsyncProviders(
    options: NoonModuleAsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }
    return [
      this.createAsyncOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createAsyncOptionsProvider(
    options: NoonModuleAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: NOON_MODULE_OPTIONS_TOKEN,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }
    return {
      provide: NOON_MODULE_OPTIONS_TOKEN,
      useFactory: async (optionsFactory: NoonModuleOptionsFactory) =>
        optionsFactory.createNoonModuleOptions(),
      inject: [options.useExisting || options.useClass],
    };
  }
}