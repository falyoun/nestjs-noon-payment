import { IsOptional, IsString, MaxLength } from 'class-validator';

export class NoonAddressDto {


  @IsString()
  @IsOptional()
  @MaxLength(50)
  street?: string;


  @IsString()
  @IsOptional()
  @MaxLength(50)
  street2?: string;


  @IsString()
  @IsOptional()
  @MaxLength(32)
  city?: string;



  @IsString()
  @IsOptional()
  @MaxLength(20)
  stateProvince?: string;


  @IsString()
  @IsOptional()
  @MaxLength(2)
  country?: string;


  @IsString()
  @IsOptional()
  @MaxLength(10)
  postalCode?: string;
}