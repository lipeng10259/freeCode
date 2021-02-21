/*
    改文件专门为count组件生成action对象


*/

// function createIncrementAction () {

//     return {type:'increment',data}

// }


// function createDecrementAction () {

//     return {type:'decrement',data}

// }
// import store from './store'
 import {INCREMENT,DECREMENT} from './counstant'
// 同步action ，就是指action的值为Object类型的一般对象
export const createIncrementAction = data =>({type:INCREMENT,data})

export const createDecrementAction = data =>({type:DECREMENT,data})

// 异步action ，就是指action的值为函数 异步action中一般都会调用同步action 异步aciton不是必须要用的
// export const createDecrementAsyncAction = (data,time) =>{      
//     return ()=>{
//         setTimeout(()=>{
//             store.dispatch(createIncrementAction(data))
//             // return {type:DECREMENT,data}
//         },time)
//     }
// }

export const createDecrementAsyncAction = (data,time) =>{      
    return (dispatch)=>{
        setTimeout(()=>{
           dispatch(createIncrementAction(data))
            // return {type:DECREMENT,data}
        },time)
    }
}
