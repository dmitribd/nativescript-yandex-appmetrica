# nativescript-yandex-appmetrica

NativeScript plugin for Yandex [AppMetrica SDK](https://appmetrica.yandex.ru/docs/mobile-sdk-dg/concepts/mobilesdk-about.html)

## Table of content

- [Supported Platforms](#this-plugin-is-built-for)
- [Installation](#installation)
- [API Methods](#api-methods)
  - [init](#init) 
  - [initReporter](#initReporter) 
  - [initWithTrackingIdentifier](#initWithTrackingIdentifier) 
  - [sendEvent](#sendEvent) 
  - [sendReporterEvent](#sendReporterEvent) 
  - [sendUserProfile](#sendUserProfile) 
- [Demo](#demo) 


## <a id="this-plugin-is-built-for"> This plugin is built for

- iOS AppMetrica SDK **3.8.2**

## <a id="installation"> Installation

`$ tns plugin add nativescript-yandex-appmetrica`



## <a id="api-methods">  API Methods


Call module by adding: 

`import { AppMetricaSDK, UserProfileAttribute, UserProfileGender } from 'nativescript-yandex-appmetrica'`

---


##### <a id="init">  **`AppMetricaSDK.init(options: Options): void`**

initializes the SDK.

| parameter   | type      | description       |
|-------------|-----------|-------------------|
| `options`   | `Options` | SDK configuration |



##### <a id="Options"> **`Options`**

| name                                                                                                                                                                                              | type                         | description                                                                                            |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------|--------------------------------------------------------------------------------------------------------|
| [apiKey](https://appmetrica.yandex.ru/docs/mobile-sdk-dg/ios/objective-c/ref/YMMYandexMetricaConfiguration.html#property_detail__property_apiKey)                                                 |`string`                      | The API key of the application.                                                                        |
| [appVersion](https://appmetrica.yandex.ru/docs/mobile-sdk-dg/ios/objective-c/ref/YMMYandexMetricaConfiguration.html#property_detail__property_appVersion)                                         |`string`                      | App version (optional)                                                                                 |
| [crashReporting](https://appmetrica.yandex.ru/docs/mobile-sdk-dg/ios/objective-c/ref/YMMYandexMetricaConfiguration.html#property_detail__property_crashReporting)                                 |`boolean`                     | Enables/disables collecting and sending information about app crashes. (optional)                      |
| [handleActivationAsSessionStart](https://appmetrica.yandex.ru/docs/mobile-sdk-dg/ios/objective-c/ref/YMMYandexMetricaConfiguration.html#property_detail__property_handleActivationAsSessionStart) |`boolean`                     | Defines the AppMetrica SDK initialization as the beginning of a session. (optional)                    |
| [handleFirstActivationAsUpdate](https://appmetrica.yandex.ru/docs/mobile-sdk-dg/ios/objective-c/ref/YMMYandexMetricaConfiguration.html#property_detail__property_handleFirstActivationAsUpdate)   |`boolean`                     | Defines the first launch of the app as an update. (optional)                                           |
| [location](https://appmetrica.yandex.ru/docs/mobile-sdk-dg/ios/objective-c/ref/YMMYandexMetricaConfiguration.html#property_detail__property_location)                                             |`CLLocation`                  | Sets custom location of the device. (optional)                                                         |
| [locationTracking](https://appmetrica.yandex.ru/docs/mobile-sdk-dg/ios/objective-c/ref/YMMYandexMetricaConfiguration.html#property_detail__property_locationTracking)                             |`boolean`                     | Enables/disables sending location of the device. (optional)                                            |
| [logs](https://appmetrica.yandex.ru/docs/mobile-sdk-dg/ios/objective-c/ref/YMMYandexMetricaConfiguration.html#property_detail__property_logs)                                                     |`boolean`                     | Enables/disables logging the activity of the library. (optional)                                       |
| [preloadInfo](https://appmetrica.yandex.ru/docs/mobile-sdk-dg/ios/objective-c/ref/YMMYandexMetricaConfiguration.html#property_detail__property_preloadInfo)                                       |`YMMYandexMetricaPreloadInfo` | Sets the instance of the YMMYandexMetricaPreloadInfo class for tracking pre-installed apps. (optional) |
| [sessionsAutoTracking](https://appmetrica.yandex.ru/docs/mobile-sdk-dg/ios/objective-c/ref/YMMYandexMetricaConfiguration.html#property_detail__property_sessionsAutoTracking)                     |`boolean`                     | Enables/disables automatic tracking of the application lifecycle. (optional)                           |
| [sessionTimeout](https://appmetrica.yandex.ru/docs/mobile-sdk-dg/ios/objective-c/ref/YMMYandexMetricaConfiguration.html#property_detail__property_sessionTimeout)                                 |`number`                      | Sets the session timeout in seconds. (optional)                                                        |
| [statisticsSending](https://appmetrica.yandex.ru/docs/mobile-sdk-dg/ios/objective-c/ref/YMMYandexMetricaConfiguration.html#property_detail__property_statisticsSending)                           |`boolean`                     | Enables/disables sending statistics to the AppMetrica server. (optional)                               |

*Example:*

```javascript
AppMetricaSDK.init({
    apiKey: 'API_key',
    appVersion: '1.0.0',
    crashReporting: true,
    logs: true
})
```

---

##### <a id="initReporter"> **`AppMetricaSDK.initReporter(options: ReporterOptions): void`**

Initializes a reporter with extended configuration.

The configuration of the reporter should be initialized before the first call to the reporter. Otherwise, the configuration of the reporter is ignored.

The reporter should be activated with the configuration using a different API key instead of the app's API key.

| parameter | type              | description            |
|-----------|-------------------|------------------------|
| `options` | `ReporterOptions` | Reporter configuration |



**`ReporterOptions`**

| name                                                                                                                                                               | type     | description                                                                 |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|-----------------------------------------------------------------------------|
| [apiKey](https://appmetrica.yandex.ru/docs/mobile-sdk-dg/ios/objective-c/ref/YMMReporterConfiguration.html#property_detail__property_apiKey)                       |`string`  | API key that differs from the main application API key.                     |
| [logs](https://appmetrica.yandex.ru/docs/mobile-sdk-dg/ios/objective-c/ref/YMMReporterConfiguration.html#property_detail__property_logs)                           |`boolean` | The flag indicating that the logging of the reporter is enabled. (optional) |
| [sessionTimeout](https://appmetrica.yandex.ru/docs/mobile-sdk-dg/ios/objective-c/ref/YMMReporterConfiguration.html#property_detail__property_sessionTimeout)       |`number`  | Session timeout in seconds. (optional)                                      |
| [statisticsSending](https://appmetrica.yandex.ru/docs/mobile-sdk-dg/ios/objective-c/ref/YMMReporterConfiguration.html#property_detail__property_statisticsSending) |`boolean` | A flag indicating that sending statistics is enabled. (optional)            |


*Example:*

```javascript
AppMetricaSDK.initReporter({
    apiKey: 'Additional_API_key',
    logs: true,
    sessionTimeout: 3600
})
```

---

##### <a id="initWithTrackingIdentifier"> **`AppMetricaSDK.initWithTrackingIdentifier(options: Options, trackingID: string): void`**

Initializes the SDK with the specified [trackingID]((https://appmetrica.yandex.ru/docs/mobile-tracking/concepts/preinstalled-app-attr.html#preinstalled-app-attr__trackingId)).

| parameter    | type                | description                                  |
|--------------|---------------------|----------------------------------------------|
| `options`    | [Options](#Options) | SDK configuration                            |
| `trackingID` | `string`            | Tracking ID for tracking pre-installed apps. |

*Example:*

```javascript
AppMetricaSDK.initWithTrackingIdentifier({
    apiKey: 'API_key',
    appVersion: '1.0.0',
    crashReporting: true,
    logs: true
}, 'trackingID')
```

---

##### <a id="sendEvent"> **`AppMetricaSDK.sendEvent(event: Event, onFailure?: (error: Error) => void): void`**

Sends an event data.

| parameter   | type       | description                                                                                                |
|-------------|------------|------------------------------------------------------------------------------------------------------------|
| `event`     | Event      | Trackable event                                                                                            |
| `onFailure` | `function` | The function that is executed when an error occurs. The error is passed as a function argument. (optional) |



##### <a id="Event"> **`Event`**

| name   | type     | description                                 |
|--------|----------|---------------------------------------------|
| name   | `string` | Short name or description of the event      |
| params | `object` | Parameters as "key-value" pairs. (optional) |


*Example:*

```javascript
let event: Event = {
    name: 'Event name',
    params: {
        key1: 'value1',
        key2: 'value2'
    }
}

AppMetricaSDK.sendEvent(event, function(error) {
    console.log('Failed to send event [' + event.name + ']: ' + error)
})
```

---

##### <a id="sendReporterEvent"> **`AppMetricaSDK.sendReporterEvent(apiKey: string, event: Event, onFailure?: (error: Error) => void): void`**

Sends an event data using a reporter to an additional API key.

| parameter   | type            | description                                                                                                |
|-------------|-----------------|------------------------------------------------------------------------------------------------------------|
| `apiKey`    | string          | API key that differs from the main application API key.                                                    |
| `event`     | [Event](#Event) | Trackable event to an additional API key.                                                                  |
| `onFailure` | `function`      | The function that is executed when an error occurs. The error is passed as a function argument. (optional) |

*Example:*

```javascript
let event: Event = {
    name: 'Event name',
    params: {
        key1: 'value1',
        key2: 'value2'
    }
}

AppMetricaSDK.sendReporterEvent('Additional_API_key', event, function(error) {
    console.log('Failed to send event [' + event.name + ']: ' + error)
})
```

---

##### <a id="sendUserProfile"> **`AppMetricaSDK.sendUserProfile(profieID: string, userProfileAttributes: UserProfileAttribute[], onFailure?: (error: Error) => void): void`**

Sends the user profile attributes.

| parameter               | type                   | description                                                                                                |
|-------------------------|------------------------|------------------------------------------------------------------------------------------------------------|
| `profieID`              | string                 | ID of the user profile.                                                                                    |
| `userProfileAttributes` | UserProfileAttribute[] | A list of the user profile attributes.                                                                     |
| `onFailure`             | `function`             | The function that is executed when an error occurs. The error is passed as a function argument. (optional) |

*Example:*

```javascript
let userProfileAttributes: UserProfileAttribute[] = [
   UserProfileAttribute.customCounter({name: 'time_left', value: -4.42}),
   UserProfileAttribute.gender(UserProfileGender.Male),
   UserProfileAttribute.birthDate(24),
   UserProfileAttribute.notificationsEnabled(false),
   UserProfileAttribute.customString({name: 'born_in', default: 'Moscow'}),
   UserProfileAttribute.customString({name: 'address', value: ''}),
   UserProfileAttribute.customString({name: 'age', value: '24'}),
   UserProfileAttribute.customCounter({name: 'logins_count', value: 1}),
   UserProfileAttribute.customBool({name: 'has_premium', value: true})
]

AppMetricaSDK.sendUserProfile('profieID', userProfileAttributes, function(error) {
    console.log('Failed to send AppMetrica user profile: ' + error)
})
```

---


## <a id="Demo">  Demo

This plugin has a `demo` project bundled with it. To give it a try, clone this repo and from root `nativescript-yandex-appmetrica` execute the following:

```sh
npm run plugin.prepare
```

Run for the `iOS` platform:

```sh
npm run demo.ios
```