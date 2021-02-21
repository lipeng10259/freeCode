import {IPT_CHANGE,DEL_TODOLIST,ADD_TODOLIST} from './actionTypes'


export const iptChangeAction = (data) => ({type:IPT_CHANGE,data})

export const delTodoAction = (data) => ({type:DEL_TODOLIST,data})

export const addTodoAction = (data) => ({type:ADD_TODOLIST,data})