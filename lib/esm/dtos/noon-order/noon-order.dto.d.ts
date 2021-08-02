import { NoonOrderItemDto } from '@app/dtos';
export declare class NoonOrderDto {
    status: 'AUTHORIZED' | 'CAPTURED' | '3DS_ENROLL_CHECKED';
    creationTime: string;
    id: number;
    name: string;
    amount: number;
    currency: string;
    channel: 'Web' | 'Mobile';
    category: string;
    reference?: string;
    description?: string;
    ipAddress?: string;
    nvp?: Map<any, any>;
    items?: NoonOrderItemDto[];
    totalAuthorizedAmount: number;
    totalCapturedAmount: number;
    totalRefundedAmount: number;
    totalRemainingAmount: number;
    totalReversedAmount: number;
    totalSalesAmount: number;
}
