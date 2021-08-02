import { IsOptional, IsString } from 'class-validator';


export class NoonOfferDto {

  // Unique identifier of the offer to be applied on the order (value is pre generated during the offer configuration).
  // Applicable only when payment data is of type Card and must be provided along with the payment data block.
  @IsString()
  @IsOptional()
  identifier?: string;


  // The amount which needs to be deducted from the order amount before the offer calculation and applicability check. This could be the delivery fee, VAT, or any other amount.
  // Field is a decimal that consists of the characters 0-9 and '.' and represents a valid decimal number with maximum post-decimal digits as 3 (depends on the currency). The value of this field should be less than the order amount.
  // Applicable only when order has any offer to attach.
  @IsOptional()
  exemptedAmount?: number;

}