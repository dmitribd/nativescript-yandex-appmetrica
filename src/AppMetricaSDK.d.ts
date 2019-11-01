import { Event, Options, ReporterOptions } from "./index";
import { UserProfileAttributes } from "./UserProfileAttributes";
export { UserProfileAttributes, UserProfileGender } from "./UserProfileAttributes";
export declare class AppMetricaSDK {
    private static excludeReadOnlyProperties;
    static init(options: Options): void;
    initReporter(options: ReporterOptions): void;
    static initWithTrackingIdentifier(options: Options, trackingID: string): void;
    static sendEvent(event: Event, onFailure?: (error: Error) => void): void;
    static sendReporterEvent(apiKey: string, event: Event, onFailure?: (error: Error) => void): void;
    static sendUserProfile(profieID: string, userProfileAttributes: UserProfileAttributes[], onFailure?: (error: Error) => void): void;
}
