/// <reference path="platforms/ios/YandexMobileMetrica.d.ts" />
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
declare abstract class UserProfileAttribute implements UserProfileAttributeInterface {
    abstract setValue(value: any): any;
}
export declare class UserProfileAttributeName extends UserProfileAttribute {
    setValue(value: string): any;
}
export declare class UserProfileAttributeGender extends UserProfileAttribute {
    setValue(value: UserProfileGender | YMMGenderType): any;
}
export declare class UserProfileAttributeBirthDate extends UserProfileAttribute {
    setValue(value: number): any;
}
export declare class UserProfileAttributeNotificationsEnabled extends UserProfileAttribute {
    setValue(value: boolean): any;
}
export declare class UserProfileAttributeCustomBool extends UserProfileAttribute {
    setValue(property: PropertyBoolean): any;
}
export declare class UserProfileAttributeCustomCounter extends UserProfileAttribute {
    setValue(property: PropertyNumber): any;
}
export declare class UserProfileAttributeCustomNumber extends UserProfileAttribute {
    setValue(property: PropertyNumber): any;
}
export declare class UserProfileAttributeCustomString extends UserProfileAttribute {
    setValue(property: PropertyString | PropertyStringDefault): any;
}
export declare enum UserProfileGender {
    Male = 0,
    Female = 1,
    Other = 2
}
export declare class UserProfileAttributes {
    static customName(): UserProfileAttributeName;
    static gender(): UserProfileAttributeGender;
    static birthDate(): UserProfileAttributeBirthDate;
    static notificationsEnabled(): UserProfileAttributeNotificationsEnabled;
    static customBool(): UserProfileAttributeCustomBool;
    static customCounter(): UserProfileAttributeCustomCounter;
    static customNumber(): UserProfileAttributeCustomNumber;
    static customString(): UserProfileAttributeCustomString;
}
export {};
