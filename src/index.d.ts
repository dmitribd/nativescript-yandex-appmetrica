export { UserProfile, UserProfileGender } from "./UserProfile";

export interface Options {
    apiKey: string;
    appVersion?: string;
    crashReporting?: boolean;
    handleActivationAsSessionStart?: boolean;
    handleFirstActivationAsUpdate?: boolean;
    location?: CLLocation;
    locationTracking?: boolean;
    logs?: boolean;
    preloadInfo?: YMMYandexMetricaPreloadInfo;
    sessionsAutoTracking?: boolean;
    sessionTimeout?: number;
    statisticsSending?: boolean;
}

export interface ReporterOptions {
    apiKey: string;
    logs?: boolean;
    sessionTimeout?: number;
    statisticsSending?: boolean;
}

export interface Event {
    name: string;
    params?: NSDictionary<any, any>;
}

export class AppMetrica {
    public static init(options: Options): void;
    public static initReporter(options: ReporterOptions): void;
    public static initWithTrackingIdentifier(options: Options, trackingID: string): void;
    public static sendEvent(event: Event, onFailure?: (error: Error) => void): void;
    public static sendReporterEvent(apiKey: string, event: Event, onFailure?: (error: Error) => void): void;
    public static setUserProfile(profieID: string, updatesArray: UserProfile[], onFailure?: (error: Error) => void): void;
}