/// <reference path="ValidationTest.ts" />
var ValidationTest;
(function (ValidationTest) {
    const letterRegexp = /^[A-Za-z]+$/;
    class LettersOnlyValidator {
        isAcceptable(s) {
            return letterRegexp.test(s);
        }
    }
    ValidationTest.LettersOnlyValidator = LettersOnlyValidator;
})(ValidationTest || (ValidationTest = {}));
