import { Observable } from "tns-core-modules/data/observable";
import { UserProfileAttribute, AppMetricaSDK, UserProfileGender } from "nativescript-yandex-appmetrica";

export class HelloWorldModel extends Observable {

    private _counter: number;
    private _message: string;

    constructor() {
        super();

        // Initialize default values.
        this._counter = 42;
        this.updateMessage();
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange("message", value);
        }
    }

    onTap() {
        this._counter--;
        this.updateMessage();

        AppMetricaSDK.sendEvent({
            name: 'button_click',
            params: {
                message: this._message,
                counter: this._counter,
            }
        });

        AppMetricaSDK.sendUserProfile('123456', [
            UserProfileAttribute.customCounter({name: 'time_left', value: -4.42}),
            UserProfileAttribute.gender(UserProfileGender.Male),
            UserProfileAttribute.birthDateWithAge(24),
            UserProfileAttribute.notificationsEnabled(false),
            UserProfileAttribute.customString({name: 'born_in', default: 'Moscow'}),
            UserProfileAttribute.customString({name: 'address', value: ''}),
            UserProfileAttribute.customString({name: 'age', value: '24'}),
            UserProfileAttribute.customCounter({name: 'logins_count', value: 1}),
            UserProfileAttribute.customBool({name: 'has_premium', value: true})
        ]);
    }

    private updateMessage() {
        if (this._counter <= 0) {
            this.message = "Hoorraaay! You unlocked the NativeScript clicker achievement!";
        } else {
            this.message = `${this._counter} taps left`;
        }
    }
}
