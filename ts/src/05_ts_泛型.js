(function () {
    function identity(arg) {
        return arg;
    }
    console.log(identity('string'));
    console.log(identity('string'));
    console.log(identity(2222));
    function iN(arg) {
        return arg;
    }
    function loggingIdentity(arg) {
        console.log(arg.length); // Now we know it has a .length property, so no more error
        return arg;
    }
    loggingIdentity({ length: 10, value: 3 });
    function getProperty(obj, key) {
        return obj[key];
    }
    let x = { a: 1, b: 2, c: 3, d: 4 };
    console.log(getProperty(x, 'a'));
})();
