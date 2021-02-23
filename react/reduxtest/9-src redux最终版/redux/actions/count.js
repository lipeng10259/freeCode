// 改文件专门为count组件生成action对象 

import {DECREMENT,INCREMENT} from '../constant'

// 所谓同步aciton 就是指action的值为一般对象
export const increment = (data)=> ({type:INCREMENT,data})

export const decrement = (data)=> ({type:DECREMENT,data})

// 所谓异步aciton 就是指action的值为函数 异步中间件 redux-thunk 异步action中一般调用同步aciton ，异步action 不是必须要用的

export const incrementAsync = (data,time)=>{

    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(increment(data)) 
        },time)   
    }
}

