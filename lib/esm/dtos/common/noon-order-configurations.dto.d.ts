export declare class NoonOrderConfigurationsDto {
    paymentAction?: 'AUTHORIZE' | 'SALE';
    tokenizeCc?: boolean;
    locale?: 'en' | 'ar';
    returnUrl?: string;
    styleProfile?: string;
    initiationValidity?: string;
    generateShortLink?: boolean;
    requiredCardHolderName?: boolean;
}
