
export interface NoonModuleInterface {
  noonApiKey: string;
  paymentMode: 'Test' | 'Live';
}

export interface EnvironmentVariables {
  port: number;
  noonModuleInterface: NoonModuleInterface;
}

export default (): EnvironmentVariables => ({
  port: +process.env.PORT,
  noonModuleInterface: {
    noonApiKey: process.env.NOON_API_KEY,
    paymentMode: <'Test' | 'Live'>process.env.PAYMENT_MODE || 'Test',
  }
});
