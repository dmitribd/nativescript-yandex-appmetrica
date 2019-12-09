/// <reference path="platforms/ios/YandexMobileMetrica.d.ts" />
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
export declare enum UserProfileGender {
    Male = 0,
    Female = 1,
    Other = 2
}
export declare class UserProfileAttribute {
    static gender(value: UserProfileGender | YMMGenderType): any;
    static birthDateWithAge(value: number): any;
    static notificationsEnabled(value: boolean): any;
    static customBool(property: PropertyBoolean): any;
    static customCounter(property: PropertyNumber): any;
    static customNumber(property: PropertyNumber): any;
    static customString(property: PropertyString | PropertyStringDefault): any;
}
