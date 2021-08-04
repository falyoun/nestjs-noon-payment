
export interface NoonModuleInterface {
  noonApiKey: string;
  appName: string;
  businessId: string;
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
    appName: process.env.NOON_APPLICATION_NAME,
    businessId: process.env.NOON_BUSINESS_ID,
    paymentMode: <'Test' | 'Live'>process.env.PAYMENT_MODE || 'Test',
  }
});
