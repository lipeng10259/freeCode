
;(()=>{

    // enum Response {
    //     NO = 0,
    //     YES = 1
    // }

    // let x = [0, 1,null];

    // console.log(typeof x)

    // console.log(111)


    interface Named {
        name: string;
    }
    
    let x: Named;
    // y's inferred type is { name: string; location: string; }
    let y = { name: 'Alice', location: 'Seattle' };
    x = y;

})()