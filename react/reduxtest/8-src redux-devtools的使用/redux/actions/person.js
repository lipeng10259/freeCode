// 改文件专门为count组件生成action对象 

import {ADD_PERSON} from '../constant'



export const createAddPersonAction = (personObj) => ({type:ADD_PERSON,data:personObj})

