import { IsDateString, IsOptional, IsString } from 'class-validator';


export class NoonOrderConfigurationsDto {
  @IsString()
  @IsOptional()
  paymentAction?: 'AUTHORIZE' | 'SALE';


  @IsOptional()
  tokenizeCc?: boolean;


  @IsString()
  @IsOptional()
  locale?: 'en' | 'ar';


  // Applicable in noon payments' hosted checkout integration model or noon payments' managed 3D Secure (for direct integration).
  @IsString()
  @IsOptional()
  returnUrl?: string;


  @IsString()
  @IsOptional()
  styleProfile?: string;


  @IsDateString()
  @IsOptional()
  initiationValidity?: string;


  @IsOptional()
  generateShortLink?: boolean;

  @IsOptional()
  requiredCardHolderName?: boolean;

}