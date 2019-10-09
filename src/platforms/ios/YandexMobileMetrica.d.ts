declare class YMMYandexMetricaConfiguration extends NSObject {
    static alloc(): YMMYandexMetricaConfiguration; // inherited from NSObject

    static new(): YMMYandexMetricaConfiguration; // inherited from NSObject

    initWithApiKey(apiKey: string): YMMYandexMetricaConfiguration;

    apiKey: string;

    appVersion: string;

    crashReporting: boolean;

    handleActivationAsSessionStart: boolean;

    handleFirstActivationAsUpdate: boolean;

    location: CLLocation;

    locationTracking: boolean;

    logs: boolean;

    preloadInfo: YMMYandexMetricaPreloadInfo;

    sessionsAutoTracking: boolean;

    sessionTimeout: number;

    statisticsSending: boolean;
}

declare class YMMMutableReporterConfiguration extends NSObject {
    static alloc(): YMMMutableReporterConfiguration; // inherited from NSObject

    static new(): YMMMutableReporterConfiguration; // inherited from NSObject

    logs: boolean;

    sessionTimeout: number;

    statisticsSending: boolean;
}

declare class YMMMutableRevenueInfo extends NSObject {
    static alloc(): YMMMutableRevenueInfo; // inherited from NSObject

    static new(): YMMMutableRevenueInfo; // inherited from NSObject

    payload: NSDictionary<any, any>;

    productID: string;

    quantity: number;

    receiptData: NSData;

    transactionID: string;
}

declare class YMMReporterConfiguration extends NSObject {
    static alloc(): YMMReporterConfiguration; // inherited from NSObject

    static new(): YMMReporterConfiguration; // inherited from NSObject

    initWithApiKey(apiKey: string): YMMReporterConfiguration;

    apiKey: string;

    logs: boolean;

    sessionTimeout: number;

    statisticsSending: boolean;
}

declare class YMMRevenueInfo extends NSObject {
    static alloc(): YMMRevenueInfo; // inherited from NSObject

    static new(): YMMRevenueInfo; // inherited from NSObject

    initWithPriceCurrency(price: number, currency: string): YMMRevenueInfo;

    initWithPriceCurrencyQuantityProductIDTransactionIDReceiptDataPayload(price: number, currency: string, quantity: number, productID: string, transactionID: string, receiptData: NSData, payload: NSDictionary<any, any>): YMMRevenueInfo;

    initWithPriceDecimalCurrency(priceDecimal: number, currency: string): YMMRevenueInfo;

    initWithPriceDecimalCurrencyQuantityProductIDTransactionIDReceiptDataPayload(priceDecimal: number, currency: string, quantity: number, productID: string, transactionID: string, receiptData: NSData, payload: NSDictionary<any, any>): YMMRevenueInfo;

    currency: string;

    payload: NSDictionary;

    price: number;

    priceDecimal: number;

    productID: string;

    quantity: number;

    receiptData: NSData;

    transactionID: string;
}

declare class YMMMutableUserProfile extends YMMUserProfile {
    static alloc(): YMMMutableUserProfile; // inherited from NSObject

    static new(): YMMMutableUserProfile; // inherited from NSObject

    apply(update: any): void;

    applyFromArray(updatesArray: Array<any>): void;
}

declare class YMMCustomBoolAttribute extends NSObject {
    withValue(value: boolean): Object;

    withValueIfUndefined(value: boolean): Object;

    withValueReset(): Object;
}

declare class YMMBirthDateAttribute extends NSObject {
    withAge(value: number): Object;

    withYear(year: number): Object;

    withYearMonth(year: number, month: number): Object;

    withYearMonthDay(year: number, month: number, day: number): Object;

    withDateComponents(dateComponents: NSDateComponents): Object;

    withValueReset(): Object;
}

declare class YMMCustomCounterAttribute extends NSObject {
    withDelta(value: number): Object;
}

declare class YMMCustomNumberAttribute extends NSObject {
    withValue(value: number): Object;

    withValueIfUndefined(value: number): Object;

    withValueReset(): Object;
}

declare class YMMCustomStringAttribute extends NSObject {
    withValue(value: string): Object;

    withValueIfUndefined(value: string): Object;

    withValueReset(): Object;
}

declare enum YMMGenderType {
    YMMGenderTypeMale,
    YMMGenderTypeFemale,
    YMMGenderTypeOther,
}

declare class YMMGenderAttribute extends NSObject {
    withValue(value: YMMGenderType): Object;

    withValueReset(): Object;
}

declare class YMMNameAttribute extends NSObject {
    withValue(value: string): Object;

    withValueReset(): Object;
}

declare class YMMNotificationsEnabledAttribute extends NSObject {
    withValue(value: boolean): Object;

    withValueReset(): Object;
}

declare class YMMProfileAttribute extends NSObject {
    static alloc(): YMMProfileAttribute; // inherited from NSObject

    static new(): YMMProfileAttribute; // inherited from NSObject

    static birthDate(): YMMBirthDateAttribute;

    static customBool(name: string): YMMCustomBoolAttribute;

    static customCounter(name: string): YMMCustomCounterAttribute;

    static customNumber(name: string): YMMCustomNumberAttribute;

    static customString(name: string): YMMCustomStringAttribute;

    static gender(): YMMGenderAttribute;

    static name(): YMMNameAttribute;

    static notificationsEnabled(): YMMNotificationsEnabledAttribute;
}

declare class YMMUserProfile extends NSObject {
    static alloc(): YMMUserProfile; // inherited from NSObject

    static new(): YMMUserProfile; // inherited from NSObject

    initWithUpdates(updates: Array<any>): YMMUserProfile;

    updates: Array<any>;
}

declare class YMMYandexMetricaReporting extends NSObject {
    pauseSession(): void;

    resumeSession(): void;

    reportErrorExceptionOnFailure(name: string, exception: NSException, onFailure: (error: Error) => void): void;

    reportEventOnFailure(name: string, onFailure: (error: Error) => void): void;

    reportEventParametersOnFailure(name: string, params: NSDictionary, onFailure: (error: Error) => void): void;

    reportRevenueOnFailure(revenueInfo: YMMRevenueInfo, onFailure: (error: Error) => void): void;

    reportUserProfileOnFailure(userProfile: YMMUserProfile, onFailure: (error: Error) => void): void;

    setStatisticsSending(enabled: boolean): void;

    setUserProfileID(userProfileID: string): void;
}

declare class YMMYandexMetrica extends NSObject {
    static activateWithConfiguration(configuration: YMMYandexMetricaConfiguration): void;

    static activateReporterWithConfiguration(configuration: YMMReporterConfiguration): void;

    static handleOpenURL(url: string): boolean;

    static libraryVersion(): string;

    static pauseSession(): void;

    static resumeSession(): void;

    static reporterForApiKey(apiKey: string): YMMYandexMetricaReporting;

    static reportErrorExceptionOnFailure(message: string, exception: NSException, onFailure: (error: Error) => void): void;

    static reportEventOnFailure(message: string, onFailure: (error: Error) => void): void;

    static reportEventParametersOnFailure(message: string, params: NSDictionary<any, any>, onFailure: (error: Error) => void): void;

    static reportReferralUrl(url: NSURL): void;

    static reportRevenueOnFailure(revenueInfo: YMMRevenueInfo, onFailure: (error: Error) => void): void;

    static reportUserProfileOnFailure(userProfile: YMMUserProfile, onFailure: (error: Error) => void): void;

    static requestAppMetricaDeviceIDWithCompletionQueueCompletionBlock(queue: any, block: any): void

    static sendEventsBuffer(): void;

    static setLocation(location: CLLocation): void;

    static setLocationTracking(enabled: boolean): void;

    static setStatisticsSending(enabled: boolean): void;

    static setUserProfileID(userProfileID: string): void;
}

declare class YMMYandexMetricaPreloadInfo extends NSObject {

    static alloc(): YMMYandexMetricaPreloadInfo; // inherited from NSObject

    static new(): YMMYandexMetricaPreloadInfo; // inherited from NSObject

    initWithTrackingIdentifier(trackingID: string): YMMYandexMetricaPreloadInfo;

    setAdditionalInfoForKey(info: string, key: string): void;
}