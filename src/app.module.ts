import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from "@nestjs/config";
import configurations from './configurations';
import { NoonPaymentModule } from "@app/noon-payment.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [configurations],
    }),
    NoonPaymentModule.register({
      noonApiKey: process.env.NOON_API_KEY,
      paymentMode: "Test"
    }),
    NoonPaymentModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          ...configService.get('noonModuleInterface'),
        };
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
