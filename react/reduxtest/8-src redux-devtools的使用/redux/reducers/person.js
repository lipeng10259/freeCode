// 改文件是用于创建一个为count 组件服务的reducer，reducer 的本质就是一个函数 
// reducer 函数会街道两个参数，分别为：之前的状态（prestate） 动作对象（action）

import {ADD_PERSON} from '../constant'
let  defaultPreState = {personArr:[{id:'1',name:'tom',age:15}]}
// const defaultPreState = [{id:'1',name:'tom',age:15}]
export default function personReducer (preState = defaultPreState,action) {
    const {type,data} = action
    // 从action中获取 type data
    switch (type) {
        // 根据type加工数据
        case ADD_PERSON:
            let  obj = JSON.parse(JSON.stringify(preState))
            obj.personArr = [data,...preState.personArr]
            return obj;

        default:

            return preState;
    }

}