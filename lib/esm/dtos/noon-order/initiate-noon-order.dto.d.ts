import { NoonOrderDto, NoonOfferDto, NoonBillingDto, NoonShippingDto, NoonDeviceFingerPrintDto, NoonMerchantDescriptorDto, NoonOrderConfigurationsDto, NoonPaymentDataDto } from "@app/dtos";
export declare class InitiateNoonOrderDto {
    apiOperation: "INITIATE";
    order: NoonOrderDto;
    billing: NoonBillingDto;
    shipping: NoonShippingDto;
    deviceFingerPrint: NoonDeviceFingerPrintDto;
    paymentTokens?: string[];
    offers?: string[];
    merchantDescriptor: NoonMerchantDescriptorDto;
    configuration: NoonOrderConfigurationsDto;
    paymentData: NoonPaymentDataDto;
    offer: NoonOfferDto;
}
