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


    function getProperty<T,K> (obj:T, key:K) {
        return obj[`${key}`]
    }

    let x = { a: 1, b: 2, c: 3, d: 4 };

    console.log(getProperty(x,'a'))


    function loggingIdentityArr<T>(arg:T[]):T[]{
    // function loggingIdentityArr<T>(arg:Array<T>):Array<T>{
        console.log(arg.length)
        return arg;
    }

    loggingIdentityArr([1,2,3])

    function loggingIdentityObj<T>(obj:T):T {
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                console.log(obj[key])
                
            }
        }
        return obj
    }


    loggingIdentityObj({a:1,b:2})

 


    ;(()=>{
        
        console.log('泛型类型')
        
        function identity<T>(arg:T):T{
            return arg
        }

        let myIdentity:{<T>(arg:T):T} = identity

        let myInentity:{<T>(arg:T):T} = identity


        interface GenericIdentityFn {
            <T>(arg:T):T;
        }
        
        function GenericFn<T> (arg:T):T{
            return arg;
        }

        let genericFn:GenericIdentityFn = GenericFn

        console.log('泛型接口')


        interface Identity {

            <T>(arg:T):T;

        }

        let genericFnA:Identity = identity

        interface IdentityClass<T> {
            (arg:T):T
        }

        let genericFnClass:IdentityClass<string> = identity;

        console.log(genericFnClass('指定泛型类型接口'))

    
    })()

    
    ;(()=>{
        console.log('泛型类接口')
        class GenericNumber<T> {
            zeroValue:T;
            add:(x:T,y:T)=>T;
        }

        //number 类型
        let myGenericNumber = new GenericNumber<number>()
            
            myGenericNumber.zeroValue = 1
            myGenericNumber.add = function(x,y){
                return x + y
            } 
        
        // 字符串类型 

        let myGenericString = new GenericNumber<string>()

            myGenericString.zeroValue = 'hello'
            myGenericString.add = function (x,y){
                return x + y
            } 
        
        interface Lengthwise {
            length:number
        }

        function loggingIdentity<T extends Lengthwise>(arg:T):T{
            console.log(arg.length)
            return arg;
        }

        loggingIdentity({length: 10, value: 3})

        loggingIdentity([1,2,3,4,5,6,7,8])


    })()



})()