/*
    改文件专门为count组件生成action对象


*/

// function createIncrementAction () {

//     return {type:'increment',data}

// }


// function createDecrementAction () {

//     return {type:'decrement',data}

// }
 import {INCREMENT,DECREMENT} from './counstant'

export const createIncrementAction = data =>({type:INCREMENT,data})

export const createDecrementAction = data =>({type:DECREMENT,data})
