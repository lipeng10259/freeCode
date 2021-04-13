(() => {
    let list = [1, 2, 3, 4, 5];
    let obj = { a: 1, b: 2 };
    console.log('of');
    for (const i of list) {
        console.log(i);
    }
    console.log('in');
    for (const key in list) {
        console.log(key);
    }
    console.log('in');
    for (const i in obj) {
        console.log(i);
    }
})();
