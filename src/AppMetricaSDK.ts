import { Event, Options, ReporterOptions } from "./index";
import { UserProfileAttributes, UserProfileGender } from "./UserProfileAttributes";

export { UserProfileAttributes, UserProfileGender } from "./UserProfileAttributes";

export class AppMetricaSDK {

    private static excludeReadOnlyProperties(options: Object): Object {
        const KEY = 0;
        return Object.fromEntries(Object.entries(options).filter(function(entry) {
            return !['apiKey'].includes(entry[KEY]);
        }));
    }

    public static init(options: Options): void {
        let configuration: YMMYandexMetricaConfiguration = YMMYandexMetricaConfiguration.alloc().initWithApiKey(options.apiKey);

        if (!configuration) {
            throw new Error('The API key is wrong. Please provide a valid key.');
        }

        Object.assign(configuration, AppMetricaSDK.excludeReadOnlyProperties(options));

        YMMYandexMetrica.activateWithConfiguration(configuration);
    }

    public initReporter(options: ReporterOptions): void {
        let reporterConfiguration: YMMReporterConfiguration = YMMReporterConfiguration.alloc().initWithApiKey(options.apiKey);

        Object.assign(reporterConfiguration, AppMetricaSDK.excludeReadOnlyProperties(options));

        YMMYandexMetrica.activateReporterWithConfiguration(reporterConfiguration);
    }

    public static initWithTrackingIdentifier(options: Options, trackingID: string): void {

        options.preloadInfo = YMMYandexMetricaPreloadInfo.alloc().initWithTrackingIdentifier(trackingID);
        AppMetricaSDK.init(options);
    }

    public static sendEvent(event: Event, onFailure?: (error: Error) => void): void {

        if (event.params) {
            YMMYandexMetrica.reportEventParametersOnFailure(event.name, event.params, onFailure);
        } else {
            YMMYandexMetrica.reportEventOnFailure(event.name, onFailure);
        }
    }

    public static sendReporterEvent(apiKey: string, event: Event, onFailure?: (error: Error) => void): void {

        let reporter: YMMYandexMetricaReporting = YMMYandexMetrica.reporterForApiKey(apiKey);

        reporter.resumeSession();

        if (event.params) {
            reporter.reportEventParametersOnFailure(event.name, event.params, onFailure);
        } else {
            reporter.reportEventOnFailure(event.name, onFailure);
        }

        reporter.pauseSession();
    }

    public static sendUserProfile(profieID: string, userProfileAttributes: UserProfileAttributes[], onFailure?: (error: Error) => void): void {
        let profile: YMMMutableUserProfile = YMMMutableUserProfile.alloc().init();

        profile.applyFromArray(userProfileAttributes);
        YMMYandexMetrica.setUserProfileID(profieID);

        YMMYandexMetrica.reportUserProfileOnFailure(profile, onFailure);
    }
}