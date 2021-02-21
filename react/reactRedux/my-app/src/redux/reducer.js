 import {IPT_CHANGE,DEL_TODOLIST,ADD_TODOLIST} from './actionTypes'
 
 const defaultState = {
     iptVal:'输入',
     list:['1','2','3','4']
 }
 export default (state = defaultState,action)=>{

    switch (action.type) {
        case IPT_CHANGE:
            // console.log(action.data)
            defaultState.iptVal = action.data
            return state
        case DEL_TODOLIST:
            defaultState.list.push(action.data)
            defaultState.iptVal = ''
            return state
            case ADD_TODOLIST:
               let arr =  defaultState.list.filter((el,index)=>{
                    return action.data!=index
                })
                defaultState.list = arr
                return state
        default:
            break;
    }
     return state
 }