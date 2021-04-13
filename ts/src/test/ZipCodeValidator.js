/// <reference path="ValidationTest.ts" />
var ValidationTest;
(function (ValidationTest) {
    const numberRegexp = /^[0-9]+$/;
    class zipCodeValidator {
        isAcceptable(s) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
    ValidationTest.zipCodeValidator = zipCodeValidator;
})(ValidationTest || (ValidationTest = {}));
