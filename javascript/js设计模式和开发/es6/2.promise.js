function timeout(time) {

    return new Promise ((resolve , reject) => {

        setTimeout(resolve , time , 'done')

    })

}

timeout(2000).then((value) => {
    console.log(value)
})