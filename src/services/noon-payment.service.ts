import { Inject, Injectable } from '@nestjs/common';
import { NOON_AXIOS_INSTANCE_TOKEN } from '@app/noon-constants';
import { AxiosInstance } from 'axios';
import { NoonError } from '@app/interfaces';
import {
  InitiateNoonOrderDto,
  NoonInitiateOrderResponseDto,
  NoonProcess3dPayloadDto,
  Process3dsResponseDto,
} from '@app/dtos';
import { ORDER_ERRORS } from '@app/errors';

const ORDER_URL = 'https://api-stg.noonpayments.com/payment/v1/order';

@Injectable()
export class NoonPaymentService {
  constructor(
    @Inject(NOON_AXIOS_INSTANCE_TOKEN) private readonly axiosInstance: AxiosInstance,
  ) {
  }

  async initiateNoonOrder(initiateOrderPayload: InitiateNoonOrderDto): Promise<NoonInitiateOrderResponseDto> {
    return await this.axiosInstance.post(
      ORDER_URL,
      initiateOrderPayload)
      .then(r => r.data)
      .catch(e => {
        throw {
          ...ORDER_ERRORS.INITIATE_ORDER_ERROR,
          error: e?.response?.data || e,
        } as NoonError;
      });
  }


  async process3DS(payload: NoonProcess3dPayloadDto): Promise<Process3dsResponseDto> {
    return await this.axiosInstance.post(
      ORDER_URL,
      payload)
      .then(r => r.data)
      .catch(e => {
        throw {
          ...ORDER_ERRORS.PROCESS_3DS_ERROR,
          error: e?.response?.data || e,
        } as NoonError;
      });
  }


}
