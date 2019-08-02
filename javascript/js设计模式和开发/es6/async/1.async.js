
function timeout (ms) {

    return new Promise((resulve)=>{

        setTimeout(resulve, ms)
    
    })

};

async function asyncPrint (value ,ms) {

    await timeout(ms);

    console.log(value);

};

asyncPrint('hello world' ,2000);

