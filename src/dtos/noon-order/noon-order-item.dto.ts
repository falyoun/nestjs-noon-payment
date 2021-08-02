import { IsOptional, IsString, MaxLength } from 'class-validator';

export class NoonOrderItemDto {
  @IsString()
  @IsOptional()
  name?: string;


  @IsOptional()
  quantity?: number;

  @IsOptional()
  unitPrice?: number;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  code?: string;


  @IsOptional()
  nvp?: Map<any, any>;


}