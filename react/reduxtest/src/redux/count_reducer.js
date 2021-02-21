// 改文件是用于创建一个为count 组件服务的reducer，reducer 的本质就是一个函数 
// reducer 函数会街道两个参数，分别为：之前的状态（prestate） 动作对象（action）

import {DECREMENT,INCREMENT} from './constant'
const defaultPreState = 0
export default function countReducer (preState = defaultPreState,action) {
    const {type,data} = action
    // 从action中获取 type data
    switch (type) {
        // 根据type加工数据
        case INCREMENT:

            return preState + data;

        case DECREMENT:
            
            return preState - data;
        
        default:

            return preState;
    }

}