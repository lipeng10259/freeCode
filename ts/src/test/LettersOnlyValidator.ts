
/// <reference path="ValidationTest.ts" />
namespace ValidationTest {
    const letterRegexp = /^[A-Za-z]+$/
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string){
            return letterRegexp.test(s)
        }
    }
}