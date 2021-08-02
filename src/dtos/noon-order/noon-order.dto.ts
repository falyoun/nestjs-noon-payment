import { Allow, IsNotEmpty, IsOptional, IsPositive, IsString, MaxLength } from 'class-validator';
import { NoonOrderItemDto } from '@app/dtos';

export class NoonOrderDto {
  @IsString()
  status: 'AUTHORIZED' | 'CAPTURED' | '3DS_ENROLL_CHECKED';

  @Allow()
  creationTime: string;

  @IsPositive()
  id: number;

  @IsString()
  name: string;
  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  currency: string;

  @IsNotEmpty()
  channel: 'Web' | 'Mobile';

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
  nvp?: Map<any, any>;

  @IsOptional()
  items?: NoonOrderItemDto[];


  totalAuthorizedAmount: number;
  totalCapturedAmount: number;
  totalRefundedAmount: number;
  totalRemainingAmount: number;
  totalReversedAmount: number;
  totalSalesAmount: number;

}