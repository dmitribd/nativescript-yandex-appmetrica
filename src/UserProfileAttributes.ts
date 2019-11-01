/// <reference path="./platforms/ios/YandexMobileMetrica.d.ts" />

export interface UserProfileAttributeInterface {
    setValue(value: any): Object;
}

export interface PropertyBoolean {
    name: string;
    value: boolean;
}

export interface PropertyNumber {
    name: string;
    value: number;
}

export interface PropertyStringDefault {
    name: string;
    default: string;
}

export interface PropertyString {
    name: string;
    value: string;
}

abstract class UserProfileAttribute implements UserProfileAttributeInterface {
    abstract setValue(value: any): any;
}

export class UserProfileAttributeName extends UserProfileAttribute {
    setValue(value: string): any {
        return YMMProfileAttribute.name().withValue(value);
    }
}

export class UserProfileAttributeGender extends UserProfileAttribute {
    setValue(value: UserProfileGender | YMMGenderType): any {
        return YMMProfileAttribute.gender().withValue((value as YMMGenderType));
    }
}

export class UserProfileAttributeBirthDate extends UserProfileAttribute {
    setValue(value: number): any {
        return YMMProfileAttribute.birthDate().withAge(value);
    }
}

export class UserProfileAttributeNotificationsEnabled extends UserProfileAttribute {
    setValue(value: boolean): any {
        return YMMProfileAttribute.notificationsEnabled().withValue(value);
    }
}

export class UserProfileAttributeCustomBool extends UserProfileAttribute {
    setValue(property: PropertyBoolean): any {
        return YMMProfileAttribute.customBool(property.name).withValue(property.value);
    }
}

export class UserProfileAttributeCustomCounter extends UserProfileAttribute {
    setValue(property: PropertyNumber): any {
        return YMMProfileAttribute.customCounter(property.name).withDelta(property.value);
    }
}

export class UserProfileAttributeCustomNumber extends UserProfileAttribute {
    setValue(property: PropertyNumber): any {
        return YMMProfileAttribute.customNumber(property.name).withValue(property.value);
    }
}

export class UserProfileAttributeCustomString extends UserProfileAttribute {
    setValue(property: PropertyString | PropertyStringDefault): any {
        if ((property as PropertyString).value !== undefined) {
            if ((property as PropertyString).value.length > 0) {
                return YMMProfileAttribute.customString(property.name).
                withValue((property as PropertyString).value);
            } else {
                return YMMProfileAttribute.customString(property.name).withValueReset();
            }
        } else {
            return YMMProfileAttribute.customString(property.name).
            withValueIfUndefined((property as PropertyStringDefault).default);
        }
    }
}

export enum UserProfileGender {
    Male,
    Female,
    Other,
}

export class UserProfileAttributes {
    static customName(): UserProfileAttributeName {
        return new UserProfileAttributeName;
    }

    static gender(): UserProfileAttributeGender {
        return new UserProfileAttributeGender;
    }

    static birthDate(): UserProfileAttributeBirthDate {
        return new UserProfileAttributeBirthDate;
    }

    static notificationsEnabled(): UserProfileAttributeNotificationsEnabled {
        return new UserProfileAttributeNotificationsEnabled;
    }

    static customBool(): UserProfileAttributeCustomBool {
        return new UserProfileAttributeCustomBool;
    }

    static customCounter(): UserProfileAttributeCustomCounter {
        return new UserProfileAttributeCustomCounter;
    }

    static customNumber(): UserProfileAttributeCustomNumber {
        return new UserProfileAttributeCustomNumber;
    }

    static customString(): UserProfileAttributeCustomString {
        return new UserProfileAttributeCustomString;
    }
}