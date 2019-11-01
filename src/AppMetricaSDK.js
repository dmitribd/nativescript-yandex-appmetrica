"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserProfileAttribute_1 = require("./UserProfileAttribute");
exports.UserProfileAttribute = UserProfileAttribute_1.UserProfileAttribute;
exports.UserProfileGender = UserProfileAttribute_1.UserProfileGender;
var AppMetricaSDK = (function () {
    function AppMetricaSDK() {
    }
    AppMetricaSDK.excludeReadOnlyProperties = function (options) {
        var KEY = 0;
        return Object.fromEntries(Object.entries(options).filter(function (entry) {
            return !['apiKey'].includes(entry[KEY]);
        }));
    };
    AppMetricaSDK.init = function (options) {
        var configuration = YMMYandexMetricaConfiguration.alloc().initWithApiKey(options.apiKey);
        if (!configuration) {
            throw new Error('The API key is wrong. Please provide a valid key.');
        }
        Object.assign(configuration, AppMetricaSDK.excludeReadOnlyProperties(options));
        YMMYandexMetrica.activateWithConfiguration(configuration);
    };
    AppMetricaSDK.prototype.initReporter = function (options) {
        var reporterConfiguration = YMMReporterConfiguration.alloc().initWithApiKey(options.apiKey);
        Object.assign(reporterConfiguration, AppMetricaSDK.excludeReadOnlyProperties(options));
        YMMYandexMetrica.activateReporterWithConfiguration(reporterConfiguration);
    };
    AppMetricaSDK.initWithTrackingIdentifier = function (options, trackingID) {
        options.preloadInfo = YMMYandexMetricaPreloadInfo.alloc().initWithTrackingIdentifier(trackingID);
        AppMetricaSDK.init(options);
    };
    AppMetricaSDK.sendEvent = function (event, onFailure) {
        if (event.params) {
            YMMYandexMetrica.reportEventParametersOnFailure(event.name, event.params, onFailure);
        }
        else {
            YMMYandexMetrica.reportEventOnFailure(event.name, onFailure);
        }
    };
    AppMetricaSDK.sendReporterEvent = function (apiKey, event, onFailure) {
        var reporter = YMMYandexMetrica.reporterForApiKey(apiKey);
        reporter.resumeSession();
        if (event.params) {
            reporter.reportEventParametersOnFailure(event.name, event.params, onFailure);
        }
        else {
            reporter.reportEventOnFailure(event.name, onFailure);
        }
        reporter.pauseSession();
    };
    AppMetricaSDK.sendUserProfile = function (profieID, userProfileAttributes, onFailure) {
        var profile = YMMMutableUserProfile.alloc().init();
        profile.applyFromArray(userProfileAttributes);
        YMMYandexMetrica.setUserProfileID(profieID);
        YMMYandexMetrica.reportUserProfileOnFailure(profile, onFailure);
    };
    return AppMetricaSDK;
}());
exports.AppMetricaSDK = AppMetricaSDK;
//# sourceMappingURL=AppMetricaSDK.js.map