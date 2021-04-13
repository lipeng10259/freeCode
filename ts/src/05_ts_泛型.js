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
        return obj[`${key}`];
    }
    let x = { a: 1, b: 2, c: 3, d: 4 };
    console.log(getProperty(x, 'a'));
    function loggingIdentityArr(arg) {
        // function loggingIdentityArr<T>(arg:Array<T>):Array<T>{
        console.log(arg.length);
        return arg;
    }
    loggingIdentityArr([1, 2, 3]);
    function loggingIdentityObj(obj) {
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                console.log(obj[key]);
            }
        }
        return obj;
    }
    loggingIdentityObj({ a: 1, b: 2 });
    (() => {
        console.log('泛型类型');
        function identity(arg) {
            return arg;
        }
        let myIdentity = identity;
        let myInentity = identity;
        function GenericFn(arg) {
            return arg;
        }
        let genericFn = GenericFn;
        console.log('泛型接口');
        let genericFnA = identity;
        let genericFnClass = identity;
        console.log(genericFnClass('指定泛型类型接口'));
    })();
    (() => {
        console.log('泛型类接口');
        class GenericNumber {
        }
        //number 类型
        let myGenericNumber = new GenericNumber();
        myGenericNumber.zeroValue = 1;
        myGenericNumber.add = function (x, y) {
            return x + y;
        };
        // 字符串类型 
        let myGenericString = new GenericNumber();
        myGenericString.zeroValue = 'hello';
        myGenericString.add = function (x, y) {
            return x + y;
        };
        function loggingIdentity(arg) {
            console.log(arg.length);
            return arg;
        }
        loggingIdentity({ length: 10, value: 3 });
        loggingIdentity([1, 2, 3, 4, 5, 6, 7, 8]);
    })();
})();
