import { AxiosInstance } from 'axios';
import { NoonModuleOptions } from '@app/interfaces';
import { InitiateNoonOrderDto, NoonInitiateOrderResponseDto, NoonProcess3dPayloadDto, Process3dsResponseDto } from '@app/dtos';
export declare class NoonPaymentService {
    private readonly axiosInstance;
    private readonly noonModuleOptions;
    constructor(axiosInstance: AxiosInstance, noonModuleOptions: NoonModuleOptions);
    initiateNoonOrder(initiateOrderPayload: InitiateNoonOrderDto): Promise<NoonInitiateOrderResponseDto>;
    process3DS(payload: NoonProcess3dPayloadDto): Promise<Process3dsResponseDto>;
}
