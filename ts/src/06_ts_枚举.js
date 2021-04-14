;
(() => {
    // enum Response {
    //     NO = 0,
    //     YES = 1
    // }
    let x;
    // y's inferred type is { name: string; location: string; }
    let y = { name: 'Alice', location: 'Seattle' };
    x = y;
})();
