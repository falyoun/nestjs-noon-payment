

export class NoonPaymentDataDto {

  // Name of the payment method being used.
  // Value depends on the payment method (for details, please see the relevant payment integration e.g. Card, Apple Pay, Google Pay, Subscription).
  type: string;


  // {paymentMethodSpecificData}
  // Value and structure of the object depends on the payment method (for details, please see the relevant payment integration e.g. Card, Apple Pay, Google Pay).
  data: any;
}