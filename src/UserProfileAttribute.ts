/// <reference path="./platforms/ios/YandexMobileMetrica.d.ts" />

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

export enum UserProfileGender {
    Male,
    Female,
    Other,
}

export class UserProfileAttribute {
    static customName(value: string): any {
        return YMMProfileAttribute.name().withValue(value);
    }

    static gender(value: UserProfileGender | YMMGenderType): any {
        return YMMProfileAttribute.gender().withValue((value as YMMGenderType));
    }

    static birthDate(value: number): any {
        return YMMProfileAttribute.birthDate().withAge(value);
    }

    static notificationsEnabled(value: boolean): any {
        return YMMProfileAttribute.notificationsEnabled().withValue(value);
    }

    static customBool(property: PropertyBoolean): any {
        return YMMProfileAttribute.customBool(property.name).withValue(property.value);
    }

    static customCounter(property: PropertyNumber): any {
        return YMMProfileAttribute.customCounter(property.name).withDelta(property.value);
    }

    static customNumber(property: PropertyNumber): any {
        return YMMProfileAttribute.customNumber(property.name).withValue(property.value);
    }

    static customString(property: PropertyString | PropertyStringDefault): any {
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