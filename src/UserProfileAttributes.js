"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserProfileAttribute = (function () {
    function UserProfileAttribute() {
    }
    return UserProfileAttribute;
}());
var UserProfileAttributeName = (function (_super) {
    __extends(UserProfileAttributeName, _super);
    function UserProfileAttributeName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserProfileAttributeName.prototype.setValue = function (value) {
        return YMMProfileAttribute.name().withValue(value);
    };
    return UserProfileAttributeName;
}(UserProfileAttribute));
exports.UserProfileAttributeName = UserProfileAttributeName;
var UserProfileAttributeGender = (function (_super) {
    __extends(UserProfileAttributeGender, _super);
    function UserProfileAttributeGender() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserProfileAttributeGender.prototype.setValue = function (value) {
        return YMMProfileAttribute.gender().withValue(value);
    };
    return UserProfileAttributeGender;
}(UserProfileAttribute));
exports.UserProfileAttributeGender = UserProfileAttributeGender;
var UserProfileAttributeBirthDate = (function (_super) {
    __extends(UserProfileAttributeBirthDate, _super);
    function UserProfileAttributeBirthDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserProfileAttributeBirthDate.prototype.setValue = function (value) {
        return YMMProfileAttribute.birthDate().withAge(value);
    };
    return UserProfileAttributeBirthDate;
}(UserProfileAttribute));
exports.UserProfileAttributeBirthDate = UserProfileAttributeBirthDate;
var UserProfileAttributeNotificationsEnabled = (function (_super) {
    __extends(UserProfileAttributeNotificationsEnabled, _super);
    function UserProfileAttributeNotificationsEnabled() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserProfileAttributeNotificationsEnabled.prototype.setValue = function (value) {
        return YMMProfileAttribute.notificationsEnabled().withValue(value);
    };
    return UserProfileAttributeNotificationsEnabled;
}(UserProfileAttribute));
exports.UserProfileAttributeNotificationsEnabled = UserProfileAttributeNotificationsEnabled;
var UserProfileAttributeCustomBool = (function (_super) {
    __extends(UserProfileAttributeCustomBool, _super);
    function UserProfileAttributeCustomBool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserProfileAttributeCustomBool.prototype.setValue = function (property) {
        return YMMProfileAttribute.customBool(property.name).withValue(property.value);
    };
    return UserProfileAttributeCustomBool;
}(UserProfileAttribute));
exports.UserProfileAttributeCustomBool = UserProfileAttributeCustomBool;
var UserProfileAttributeCustomCounter = (function (_super) {
    __extends(UserProfileAttributeCustomCounter, _super);
    function UserProfileAttributeCustomCounter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserProfileAttributeCustomCounter.prototype.setValue = function (property) {
        return YMMProfileAttribute.customCounter(property.name).withDelta(property.value);
    };
    return UserProfileAttributeCustomCounter;
}(UserProfileAttribute));
exports.UserProfileAttributeCustomCounter = UserProfileAttributeCustomCounter;
var UserProfileAttributeCustomNumber = (function (_super) {
    __extends(UserProfileAttributeCustomNumber, _super);
    function UserProfileAttributeCustomNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserProfileAttributeCustomNumber.prototype.setValue = function (property) {
        return YMMProfileAttribute.customNumber(property.name).withValue(property.value);
    };
    return UserProfileAttributeCustomNumber;
}(UserProfileAttribute));
exports.UserProfileAttributeCustomNumber = UserProfileAttributeCustomNumber;
var UserProfileAttributeCustomString = (function (_super) {
    __extends(UserProfileAttributeCustomString, _super);
    function UserProfileAttributeCustomString() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserProfileAttributeCustomString.prototype.setValue = function (property) {
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
    return UserProfileAttributeCustomString;
}(UserProfileAttribute));
exports.UserProfileAttributeCustomString = UserProfileAttributeCustomString;
var UserProfileGender;
(function (UserProfileGender) {
    UserProfileGender[UserProfileGender["Male"] = 0] = "Male";
    UserProfileGender[UserProfileGender["Female"] = 1] = "Female";
    UserProfileGender[UserProfileGender["Other"] = 2] = "Other";
})(UserProfileGender = exports.UserProfileGender || (exports.UserProfileGender = {}));
var UserProfileAttributes = (function () {
    function UserProfileAttributes() {
    }
    UserProfileAttributes.customName = function () {
        return new UserProfileAttributeName;
    };
    UserProfileAttributes.gender = function () {
        return new UserProfileAttributeGender;
    };
    UserProfileAttributes.birthDate = function () {
        return new UserProfileAttributeBirthDate;
    };
    UserProfileAttributes.notificationsEnabled = function () {
        return new UserProfileAttributeNotificationsEnabled;
    };
    UserProfileAttributes.customBool = function () {
        return new UserProfileAttributeCustomBool;
    };
    UserProfileAttributes.customCounter = function () {
        return new UserProfileAttributeCustomCounter;
    };
    UserProfileAttributes.customNumber = function () {
        return new UserProfileAttributeCustomNumber;
    };
    UserProfileAttributes.customString = function () {
        return new UserProfileAttributeCustomString;
    };
    return UserProfileAttributes;
}());
exports.UserProfileAttributes = UserProfileAttributes;
//# sourceMappingURL=UserProfileAttributes.js.map