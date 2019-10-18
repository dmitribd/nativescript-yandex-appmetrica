import { Event, Options, ReporterOptions } from "./index";
import { UserProfile, UserProfileGender } from "./UserProfile";

export { UserProfile, UserProfileGender } from "./UserProfile";

export class AppMetricaSDK {

    private static excludeReadOnlyProperties(options: Object): Object {
        const KEY = 0;
        return Object.fromEntries(Object.entries(options).filter(function(entry) {
            return !['apiKey'].includes(entry[KEY]);
        }));
    }

    public static init(options: Options): void {
        let configuration: YMMYandexMetricaConfiguration = YMMYandexMetricaConfiguration.alloc().initWithApiKey(options.apiKey);

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

    public static trackEvent(event: Event, onFailure?: (error: Error) => void): void {

        if (event.params) {
            YMMYandexMetrica.reportEventParametersOnFailure(event.name, event.params, onFailure);
        } else {
            YMMYandexMetrica.reportEventOnFailure(event.name, onFailure);
        }
    }

    public static trackReporterEvent(apiKey: string, event: Event, onFailure?: (error: Error) => void): void {

        let reporter: YMMYandexMetricaReporting = YMMYandexMetrica.reporterForApiKey(apiKey);

        reporter.resumeSession();

        if (event.params) {
            reporter.reportEventParametersOnFailure(event.name, event.params, onFailure);
        } else {
            reporter.reportEventOnFailure(event.name, onFailure);
        }

        reporter.pauseSession();
    }

    public static setUserProfile(profieID: string, updatesArray: UserProfile[], onFailure?: (error: Error) => void): void {
        let profile: YMMMutableUserProfile = YMMMutableUserProfile.alloc().init();

        profile.applyFromArray(updatesArray);
        YMMYandexMetrica.setUserProfileID(profieID);

        YMMYandexMetrica.reportUserProfileOnFailure(profile, onFailure);
    }
}