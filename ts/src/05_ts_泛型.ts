(function(){

    function identity<T>(arg: T): T {
        return arg;
    }

    console.log(identity('string'))

    console.log(identity<string>('string'))

    console.log(identity<number>(2222))



    function iN<T>(arg:T):T{
        return arg
    }


    interface Lengthwise {
        length: number;
    }
    

    function loggingIdentity<T extends Lengthwise>(arg: T): T {
        console.log(arg.length);  // Now we know it has a .length property, so no more error
        return arg;
    }

    loggingIdentity({length: 10, value: 3});


    function getProperty <T>(obj:T, key:K):T[K] {
        return obj[key]
    }

    let x = { a: 1, b: 2, c: 3, d: 4 };

    console.log(getProperty(x,'a'))



})()