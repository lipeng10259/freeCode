
 function timeout () {

    return new Promise ((resulve)=>{
        setTimeout(resulve,2000)
    })

   
 
}

async function f(){

    await timeout().then((res)=>{console.log('await1')});

    console.log('await')

    return  'hello world';

};

console.log('dddd');

f()

