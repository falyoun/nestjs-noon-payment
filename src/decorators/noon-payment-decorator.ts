
import { Inject } from '@nestjs/common';
import { NOON_PAYMENT_SERVICE_INSTANCE_TOKEN } from "@app/noon-constants";


export interface NoonPaymentDecorator {
  (
    target: Record<string, unknown>,
    key: string | symbol,
    index?: number | undefined,
  ): void;
}

export function InjectNoonPayment(): NoonPaymentDecorator {
  return Inject(NOON_PAYMENT_SERVICE_INSTANCE_TOKEN);
}