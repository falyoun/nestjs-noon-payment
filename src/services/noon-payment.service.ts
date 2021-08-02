import { Inject, Injectable } from '@nestjs/common';
import { NOON_AXIOS_INSTANCE_TOKEN, NOON_MODULE_OPTIONS_TOKEN } from '@app/noon-constants';
import { AxiosInstance } from 'axios';
import { NoonError, NoonModuleOptions } from '@app/interfaces';
import {
  InitiateNoonOrderDto,
  NoonInitiateOrderResponseDto,
  NoonProcess3dPayloadDto,
  Process3dsResponseDto,
} from '@app/dtos';
import { ORDER_ERRORS } from '@app/errors';

const ORDER_URL = 'https://api.noonpayments.com/payment/v1/order';

@Injectable()
export class NoonPaymentService {
  constructor(
    @Inject(NOON_AXIOS_INSTANCE_TOKEN) private readonly axiosInstance: AxiosInstance,
    @Inject(NOON_MODULE_OPTIONS_TOKEN) private readonly noonModuleOptions: NoonModuleOptions,
  ) {
  }

  async initiateNoonOrder(initiateOrderPayload: InitiateNoonOrderDto): Promise<NoonInitiateOrderResponseDto> {
    const headers = {
      Authorization: `Key_${this.noonModuleOptions.paymentMode} ${this.noonModuleOptions.noonApiKey}`,
    };
    return await this.axiosInstance.post(
      ORDER_URL,
      initiateOrderPayload, {
        headers,
      })
      .then(r => r.data)
      .catch(e => {
        throw {
          ...ORDER_ERRORS.INITIATE_ORDER_ERROR,
          error: e?.response?.data || e,
        } as NoonError;
      });
  }


  async process3DS(payload: NoonProcess3dPayloadDto): Promise<Process3dsResponseDto> {
    const headers = {
      Authorization: `Key_${this.noonModuleOptions.paymentMode} ${this.noonModuleOptions.noonApiKey}`,
    };
    return await this.axiosInstance.post(
      ORDER_URL,
      payload, {
        headers,
      })
      .then(r => r.data)
      .catch(e => {
        throw {
          ...ORDER_ERRORS.PROCESS_3DS_ERROR,
          error: e?.response?.data || e,
        } as NoonError;
      });
  }


}
