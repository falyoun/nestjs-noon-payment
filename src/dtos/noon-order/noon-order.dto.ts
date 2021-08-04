import { Allow, IsNotEmpty, IsOptional, IsPositive, IsString, MaxLength } from 'class-validator';
import { NoonOrderItemDto } from '@app/dtos';

export class NoonOrderDto {
  @IsString()
  @IsOptional()
  status?: 'AUTHORIZED' | 'CAPTURED' | '3DS_ENROLL_CHECKED';

  @Allow()
  @IsOptional()
  creationTime?: string;

  @IsPositive()
  @IsOptional()
  id?: number;

  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  currency: string;

  @IsNotEmpty()
  channel: 'Web' | 'web' | 'Mobile' | 'mobile';

  @IsNotEmpty()
  category: string;


  @IsOptional()
  @MaxLength(50)
  reference?: string;


  @IsString()
  @IsOptional()
  @MaxLength(300)
  description?: string;

  @IsString()
  @IsOptional()
  ipAddress?: string;


  @IsOptional()
  nvp?: any;

  @IsOptional()
  items?: NoonOrderItemDto[];


  @IsOptional()
  totalAuthorizedAmount?: number;
  @IsOptional()
  totalCapturedAmount?: number;
  @IsOptional()
  totalRefundedAmount?: number;
  @IsOptional()
  totalRemainingAmount?: number;
  @IsOptional()
  totalReversedAmount?: number;
  @IsOptional()
  totalSalesAmount?: number;

}