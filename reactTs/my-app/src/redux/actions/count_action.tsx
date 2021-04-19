import * as constant from '../constants'
import {Dispatch} from 'redux'
// interface INCREMENT {
//     type:constant.INCREMENT,
//     data:number
// }
// interface DECREMENT {
//     type:constant.DECREMENT,
//     data:number
// }

export interface IncrementEnthusiasm {
    type:string,
    data:number
}

export interface DecrementEnthusiasm {
    type:string,
    data:number
}

export interface AsyncIncremmentEnthusiasm  {
    (dispatch:Dispatch):void;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm 

export  function createIncrementAction(data:number):IncrementEnthusiasm  {
    return {type:constant.INCREMENT,data}
} 
// = (data:number)=>()
// export const createDecrementAction = (data:number)=>({type:constant.DECREMENT,data})
export  function createDecrementAction(data:number):DecrementEnthusiasm{
    return {type:constant.DECREMENT,data}
}

// export const createAsynccrementAction = (data:number,time:number)=>{
// export function createAsyncIncrementAction (data:number,time:number):AsyncIncremmentEnthusiasm{
//     return (dispatch)=>{
//         setTimeout(() => {
//             dispatch(createIncrementAction(data))
//         }, time);
//     }
// }