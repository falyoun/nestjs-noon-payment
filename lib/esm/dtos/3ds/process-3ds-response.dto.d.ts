import { NoonBusinessDto, NoonFraudCheckDto, NoonPayerAuthenticationDto, NoonPaymentDetailsDto, NoonOrderDto } from '@app/dtos';
export declare class Process3dsResponseDto {
    resultCode: number;
    message: string;
    resultClass: number;
    classDescription: string;
    actionHint: string;
    requestReference: string;
    result: Result;
}
export declare class Result {
    nextActions: string;
    transactions?: (TransactionsEntity)[] | null;
    order: NoonOrderDto;
    cvv: CvvOrAvs;
    avs: CvvOrAvs;
    merchant: NoonBusinessDto;
    business: NoonBusinessDto;
    events?: (EventsEntity)[] | null;
    fraudCheck: NoonFraudCheckDto;
    payerAuthentication: NoonPayerAuthenticationDto;
    paymentDetails: NoonPaymentDetailsDto;
}
export declare class TransactionsEntity {
    type: string;
    authorizationCode: string;
    creationTime: string;
    status: string;
    stan: string;
    id: string;
    amount: number;
    currency: string;
}
export declare class CvvOrAvs {
    status: string;
}
export declare class EventsEntity {
    creationTime: string;
    apiOperation: string;
    result: string;
    requestReference: string;
    durationInMs: number;
}
