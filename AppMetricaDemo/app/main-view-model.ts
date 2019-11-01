import { Observable } from "tns-core-modules/data/observable";
import { UserProfileAttributes, AppMetricaSDK, UserProfileGender } from "nativescript-yandex-metrica";

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
            UserProfileAttributes.customCounter().setValue({name: 'time_left', value: -4.42}),
            UserProfileAttributes.gender().setValue(UserProfileGender.Male),
            UserProfileAttributes.birthDate().setValue(24),
            UserProfileAttributes.notificationsEnabled().setValue(false),
            UserProfileAttributes.customString().setValue({name: 'born_in', default: 'Moscow'}),
            UserProfileAttributes.customString().setValue({name: 'address', value: ''}),
            UserProfileAttributes.customString().setValue({name: 'age', value: '24'}),
            UserProfileAttributes.customCounter().setValue({name: 'logins_count', value: 1}),
            UserProfileAttributes.customBool().setValue({name: 'has_premium', value: true}),
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
