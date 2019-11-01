import { Event, Options, ReporterOptions } from "./index";
import { UserProfileAttribute } from "./UserProfileAttribute";
export { UserProfileAttribute, UserProfileGender } from "./UserProfileAttribute";
export declare class AppMetricaSDK {
    private static excludeReadOnlyProperties;
    static init(options: Options): void;
    initReporter(options: ReporterOptions): void;
    static initWithTrackingIdentifier(options: Options, trackingID: string): void;
    static sendEvent(event: Event, onFailure?: (error: Error) => void): void;
    static sendReporterEvent(apiKey: string, event: Event, onFailure?: (error: Error) => void): void;
    static sendUserProfile(profieID: string, userProfileAttributes: UserProfileAttribute[], onFailure?: (error: Error) => void): void;
}
