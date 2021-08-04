import { DynamicModule, Global, Module, Provider } from "@nestjs/common";
import { NoonPaymentService } from "@app/services";
import axios from "axios";
import {
  NoonError,
  NoonModuleAsyncOptions,
  NoonModuleOptions,
  NoonModuleOptionsFactory
} from "@app/interfaces";
import {
  NOON_AXIOS_INSTANCE_TOKEN,
  NOON_MODULE_OPTIONS_TOKEN,
  NOON_PAYMENT_SERVICE_INSTANCE_TOKEN
} from "@app/noon-constants";

@Global()
@Module({
  providers: [NoonPaymentService],
  exports: [NoonPaymentService]
})
export class NoonPaymentModule {
  static register(options: NoonModuleOptions): DynamicModule {
    return {
      module: NoonPaymentModule,
      providers: [
        {
          provide: NOON_AXIOS_INSTANCE_TOKEN,
          useValue: axios.create()
        },
        {
          provide: NOON_MODULE_OPTIONS_TOKEN,
          useValue: options
        },
        {
          provide: NOON_PAYMENT_SERVICE_INSTANCE_TOKEN,
          useClass: NoonPaymentService
        }
      ],
      exports: [
        {
          provide: NOON_PAYMENT_SERVICE_INSTANCE_TOKEN,
          useClass: NoonPaymentService
        }
      ]
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
          useFactory: (noonModuleOptions: NoonModuleOptions) => {
            const axiosInstance = axios.create();
            axiosInstance.interceptors.request.use((v) => {
                console.log(noonModuleOptions);
               const stringToDigest = noonModuleOptions.businessId + "." + noonModuleOptions.appName + ":" + noonModuleOptions.noonApiKey;
                const base64 = Buffer.from(stringToDigest).toString("base64");
                v.headers.Authorization = `Key_${noonModuleOptions.paymentMode} ${base64}`;
                v.headers["Content-Type"] = "application/json";
                return v;
              },
              error => {
                throw {
                  error,
                  message: "Error in axios interceptor",
                  code: "axios_interceptor_error"
                } as NoonError;
              });
            return axiosInstance;
          },
          inject: [NOON_MODULE_OPTIONS_TOKEN]
        },
        {
          provide: NOON_PAYMENT_SERVICE_INSTANCE_TOKEN,
          useClass: NoonPaymentService
        },
        ...(options.extraProviders || [])
      ],
      exports: [
        {
          provide: NOON_PAYMENT_SERVICE_INSTANCE_TOKEN,
          useClass: NoonPaymentService
        }
      ]
    };
  }


  private static createAsyncProviders(
    options: NoonModuleAsyncOptions
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }
    return [
      this.createAsyncOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass
      }
    ];
  }

  private static createAsyncOptionsProvider(
    options: NoonModuleAsyncOptions
  ): Provider {
    if (options.useFactory) {
      return {
        provide: NOON_MODULE_OPTIONS_TOKEN,
        useFactory: options.useFactory,
        inject: options.inject || []
      };
    }
    return {
      provide: NOON_MODULE_OPTIONS_TOKEN,
      useFactory: async (optionsFactory: NoonModuleOptionsFactory) =>
        optionsFactory.createNoonModuleOptions(),
      inject: [options.useExisting || options.useClass]
    };
  }
}