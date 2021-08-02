import {
  NoonBusinessDto,
  NoonCheckoutDataDto, NoonDeviceFingerPrintDto,
  NoonFraudCheckDto,
  NoonOrderDto,
  NoonOrderConfigurationsDto, NoonPayerAuthenticationDto, NoonPaymentDetailsDto, NoonRequestAuthenticationDto,
} from '@app/dtos';


export class NoonInitiateOrderResponseDto {
  resultCode: number;
  message: string;
  resultClass: number;
  classDescription: string;
  actionHint: string;
  requestReference: string;
  result: {
    nextActions: string;
    order: NoonOrderDto;
    configuration: NoonOrderConfigurationsDto;
    business: NoonBusinessDto;
    checkoutData: NoonCheckoutDataDto;
    fraudCheck: NoonFraudCheckDto;
    authentication: NoonRequestAuthenticationDto;
    deviceFingerPrint: NoonDeviceFingerPrintDto;
    payerAuthentication: NoonPayerAuthenticationDto;
    paymentDetails: NoonPaymentDetailsDto;
  };
}

