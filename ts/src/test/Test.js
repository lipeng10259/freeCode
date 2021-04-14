let stringsArr = ['Hello', '98052', '101'];
let validatorsObj = {};
validatorsObj['ZIP code'] = new ValidationTest.zipCodeValidator();
validatorsObj['Letters only'] = new ValidationTest.LettersOnlyValidator();
for (let val of stringsArr) {
    for (let key in validatorsObj) {
        let isMatch = validatorsObj[key].isAcceptable(val);
        console.log(`'${val}' ${isMatch ? "matches" : "does not match"} '${val}'.`);
    }
}
