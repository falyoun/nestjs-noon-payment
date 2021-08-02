import { IsOptional, IsString, MaxLength } from 'class-validator';

export class NoonMerchantDescriptorDto {

  @IsString()
  @MaxLength(100)
  @IsOptional()
  name?: string;


  @IsString()
  @MaxLength(100)
  @IsOptional()
  legalName?: string;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  city?: string;


  @IsString()
  @MaxLength(100)
  @IsOptional()
  addressLine?: string;


  @IsString()
  @MaxLength(3)
  @IsOptional()
  country?: string;

  @IsString()
  @MaxLength(13)
  @IsOptional()
  phone?: string;

  @IsString()
  @MaxLength(20)
  @IsOptional()
  stateProvince?: string;

  @IsString()
  @MaxLength(10)
  @IsOptional()
  postCodeZip?: string;

}