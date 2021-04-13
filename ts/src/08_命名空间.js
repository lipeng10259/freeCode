// ;(()=>{
//     interface StringValidator {
//         isAcceptable(s:string): boolean
//     }
//     let letterRegexp = /^[A-Za-z]+$/
//     let numberRegexp = /^[0-9]+$/
//     class LettersOnlyValidator implements StringValidator {
//         isAcceptable(s:string) {
//             return letterRegexp.test(s)
//         }
//     }
//     class zipCodeValidator implements StringValidator {
//         isAcceptable(s:string){
//             return s.length === 5 && numberRegexp.test(s);
//         }
//     }
//     let strings = ['hello','98052','101']
//     let validators:{[s: string]:StringValidator} = {}   
//     validators['ZIP code'] = new zipCodeValidator()
//     validators['Letters only'] = new LettersOnlyValidator()
//     for (let val of strings) {
//         for (let key in validators) {
//             let isMatch = validators[key].isAcceptable(val)
//             console.log(validators[key],isMatch)
//             console.log(`'${ val }' ${ isMatch ? "matches" : "does not match" } '${ val }'.`)
//         }
//     }
// })()
var Validation;
(function (Validation) {
    const letterRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;
    class LettersOnlyValidator {
        isAcceptable(s) {
            return letterRegexp.test(s);
        }
    }
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    class zipCodeValidator {
        isAcceptable(s) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
    Validation.zipCodeValidator = zipCodeValidator;
})(Validation || (Validation = {}));
let strings = ["Hello", "98052", "101"];
let validators = {};
validators['ZIP code'] = new Validation.zipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();
for (let val of strings) {
    for (let key in validators) {
        let isMatch = validators[key].isAcceptable(val);
        console.log(`'${val}' ${isMatch ? "matches" : "does not match"} '${val}'.`);
    }
}
