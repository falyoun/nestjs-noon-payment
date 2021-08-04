import { IsNotEmpty } from "class-validator";
import {
  NoonOrderDto,
  NoonOfferDto,
  NoonBillingDto,
  NoonShippingDto,
  NoonDeviceFingerPrintDto,
  NoonMerchantDescriptorDto,
  NoonOrderConfigurationsDto,
  NoonPaymentDataDto
} from "@app/dtos";


export class InitiateNoonOrderDto {
  @IsNotEmpty()
  apiOperation: "INITIATE"; // | 'CHECK_3DS_ENROLLMENT' | 'PROCESS_AUTHENTICATION' | 'PROCESS_ACS_RESULT';

  order: NoonOrderDto;
  billing?: NoonBillingDto;
  shipping?: NoonShippingDto;
  deviceFingerPrint?: NoonDeviceFingerPrintDto;

  // Array of token identifiers (user's saved cards) to be shown on the noon payments' checkout page. User can either select one of the saved card or can use the new card.
  paymentTokens?: string[];
  // Array of offer identifiers to be shown on the noon payments' checkout page (only provided offers will be shown to the user).
  offers?: string[];

  merchantDescriptor?: NoonMerchantDescriptorDto;

  configuration?: NoonOrderConfigurationsDto;

  paymentData?: NoonPaymentDataDto;

  offer?: NoonOfferDto;
}