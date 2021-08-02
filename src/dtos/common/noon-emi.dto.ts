import { IsOptional, IsString } from 'class-validator';


export class NoonEmiDto {

  // Unique identifier of the EMI plan to associate with the order (value is pre generated during the EMI plan configuration).
  @IsString()
  @IsOptional()
  planIdentifier?: string; // Applicable only when payment data is of type Card and must be provided along with the payment data block.

}