/**
 * 改文件用于创建一个为count组件服务的renducer ，reducer 的本质是一个函数
 * 
 * reducer 函数会接到两个参数 分别为: 之前的状态 preState 动作对象 action
 * 
 * */
import {INCREMENT,DECREMENT} from './counstant'
const initPreState = 0
 export default function countReducer (preState = initPreState,action) {
    // 从 action 对象中获取：type action
    const {type,data} = action
    // 根据 type 决定如果加工数据
    switch (type) {
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;    
        default:
           return preState;
    }

 }