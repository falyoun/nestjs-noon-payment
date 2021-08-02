import { DynamicModule } from '@nestjs/common';
import { NoonModuleAsyncOptions, NoonModuleOptions } from '@app/interfaces';
export declare class NoonPaymentModule {
    static register(options: NoonModuleOptions): DynamicModule;
    static registerAsync(options: NoonModuleAsyncOptions): DynamicModule;
    private static createAsyncProviders;
    private static createAsyncOptionsProvider;
}
