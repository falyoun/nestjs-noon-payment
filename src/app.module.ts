import { Module, OnModuleInit } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import configurations from "./configurations";
import { NoonPaymentModule } from "@app/noon-payment.module";
import { InjectNoonPayment } from "@app/decorators";
import { NoonPaymentService } from "@app/services";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [configurations]
    }),
    // NoonPaymentModule.register({
    //   noonApiKey: process.env.NOON_API_KEY,
    //   paymentMode: (process.env.NOON_PAYMENT_MODE as ("Test" | "Live")) || "Test",
    //   appName: process.env.NOON_APPLICATION_NAME,
    //   businessId: process.env.NOON_BUSINESS_ID
    // }),
    NoonPaymentModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          ...configService.get("noonModuleInterface")
        };
      }
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule implements OnModuleInit {
  constructor(@InjectNoonPayment() private readonly noonPaymentService: NoonPaymentService) {
  }

  onModuleInit() {
    this.noonPaymentService.initiateNoonOrder({
      "apiOperation": "INITIATE",
      "order": {
        "amount": 70.2,
        "currency": "AED",
        "category": "secure",
        "channel": "web",
        "name": "TestOrder",
        "reference": "NPAEORD00000123",
        "description": "This is the test order",
        "nvp": {
          "5": "YES",
          "6": 35,
          "7": 1,
          "8": "cfcd47407477e248ce8c",
          "10": 7,
          "20": "cc_noonpayments"
        },
        "items": [
          {
            "name": "3-Liter Pressure Cooker",
            "quantity": 1,
            "unitPrice": 53.79
          },
          {
            "name": "9-Piece Kitchen Knife Set",
            "quantity": 1,
            "unitPrice": 16.41,
            "code": "default",
            "nvp": {
              "productSku": "productSku2",
              "risk": "abcRisk2"
            }
          }
        ],
        "ipAddress": "172.20.74.100"
      },
      "shipping": {
        "address": {
          "street": "street 1, main road",
          "city": "Port Saeed",
          "stateProvince": "Dubai",
          "country": "AE",
          "postalCode": null
        },
        "contact": {
          "firstName": "John",
          "lastName": "Doe",
          "phone": "+971-04-1234567",
          "mobilePhone": "+971-55-1234567",
          "email": "test@domain.com"
        }
      },
      "billing": {
        "address": {
          "street": "street 1, main road",
          "city": "Port Saeed",
          "stateProvince": "Dubai",
          "country": "AE",
          "postalCode": null
        },
        "contact": {
          "firstName": "John",
          "lastName": "Doe",
          "phone": "+971-04-1234567",
          "mobilePhone": "+971-55-1234567",
          "email": "test@domain.com"
        }
      },
      "paymentData": {
        "type": "CARD",
        "data": {
          "nameOnCard": "John Doe",
          "numberPlain": "5200000000000007",
          "cvv": "123",
          "expiryMonth": "01",
          "expiryYear": "2025"
        }
      },
      "deviceFingerPrint": {
        "sessionId": "abcd12-trw_2021"
      },
      "configuration": {
        "generateShortLink": true,
        "requiredCardHolderName": false,
        "tokenizeCc": true,
        "locale": "en",
        "styleProfile": "Demo",
        "initiationValidity": "2021-12-20T06:55:59",
        "paymentAction": "AUTHORIZE",
        "returnUrl": "https://www.merchantresponseback.com"
      }
    }).then(console.log).catch(console.error);
  }
}
