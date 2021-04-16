

const initState = 0
const countReducer = function (preState = initState,action) {
    let {type,data} = action

    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
        default:
            return preState;
    }
    
}

export default countReducer