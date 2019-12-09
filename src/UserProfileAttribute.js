"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserProfileGender;
(function (UserProfileGender) {
    UserProfileGender[UserProfileGender["Male"] = 0] = "Male";
    UserProfileGender[UserProfileGender["Female"] = 1] = "Female";
    UserProfileGender[UserProfileGender["Other"] = 2] = "Other";
})(UserProfileGender = exports.UserProfileGender || (exports.UserProfileGender = {}));
var UserProfileAttribute = (function () {
    function UserProfileAttribute() {
    }
    UserProfileAttribute.gender = function (value) {
        return YMMProfileAttribute.gender().withValue(value);
    };
    UserProfileAttribute.birthDateWithAge = function (value) {
        return YMMProfileAttribute.birthDate().withAge(value);
    };
    UserProfileAttribute.notificationsEnabled = function (value) {
        return YMMProfileAttribute.notificationsEnabled().withValue(value);
    };
    UserProfileAttribute.customBool = function (property) {
        return YMMProfileAttribute.customBool(property.name).withValue(property.value);
    };
    UserProfileAttribute.customCounter = function (property) {
        return YMMProfileAttribute.customCounter(property.name).withDelta(property.value);
    };
    UserProfileAttribute.customNumber = function (property) {
        return YMMProfileAttribute.customNumber(property.name).withValue(property.value);
    };
    UserProfileAttribute.customString = function (property) {
        if (property.value !== undefined) {
            if (property.value.length > 0) {
                return YMMProfileAttribute.customString(property.name).
                    withValue(property.value);
            }
            else {
                return YMMProfileAttribute.customString(property.name).withValueReset();
            }
        }
        else {
            return YMMProfileAttribute.customString(property.name).
                withValueIfUndefined(property.default);
        }
    };
    return UserProfileAttribute;
}());
exports.UserProfileAttribute = UserProfileAttribute;
//# sourceMappingURL=UserProfileAttribute.js.map