// 改文件专门为count组件生成action对象 

import {DECREMENT,INCREMENT} from './constant'

export const createIncrementAction = (data)=> ({type:INCREMENT,data})

export const createDecrementAction = (data)=> ({type:DECREMENT,data})

