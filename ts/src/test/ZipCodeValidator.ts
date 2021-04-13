
/// <reference path="ValidationTest.ts" />
namespace ValidationTest {
    const numberRegexp  = /^[0-9]+$/
    export class zipCodeValidator implements StringValidator {
        isAcceptable(s:string){
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}