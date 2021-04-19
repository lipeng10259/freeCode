import {EnthusiasmAction} from '../actions/count_action'
// import {StoreState} from './../../types/index'
import {INCREMENT,DECREMENT} from '../constants/index'

let initState = 0
export default function countReducer(preState = initState,action:EnthusiasmAction):number {
        let {type,data} = action
    
        switch (type) {
            case INCREMENT:
                return preState + data
            case DECREMENT:
                return preState - data
            default:
                return preState;
        }
        
    }


// const countReducer = function (preState = initState,action) {
//     let {type,data} = action

//     switch (type) {
//         case 'increment':
//             return preState + data
//         case 'decrement':
//             return preState - data
//         default:
//             return preState;
//     }
    
// }

// export default countReducer