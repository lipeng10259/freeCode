

const initState = 0
const countReducer = function (preState = initState,action) {
    let {type,data} = action

    switch (type) {
        case 'increment':
            return preState + 1
        case 'decrement':
            return preState - 1
        default:
            return preState;
    }
    
}

export default countReducer