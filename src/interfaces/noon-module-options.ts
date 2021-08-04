import { ModuleMetadata, Provider, Type } from '@nestjs/common';

export type NoonModuleOptions = {
  noonApiKey: string;
  paymentMode: 'Test' | 'Live';
  appName: string;
  businessId: string;
};

export interface NoonModuleOptionsFactory {
  createNoonModuleOptions(): Promise<NoonModuleOptions> | NoonModuleOptions;
}

export interface NoonModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<NoonModuleOptionsFactory>;
  useClass?: Type<NoonModuleOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<NoonModuleOptions> | NoonModuleOptions;
  inject?: any[];
  extraProviders?: Provider[];
}