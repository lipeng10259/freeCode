import React, { Component } from 'react'
import store from './../../redux/store'

import {iptChangeAction,delTodoAction,addTodoAction} from './../../redux/action'
import TodoListUI from './../TodoListUI/index'

export default class TodoList extends Component {
    render() {
        let {iptVal,list}  = store.getState()
        return (
            <div>
                <TodoListUI 
                iptChange = {this.iptChange}
                addTodoList = {this.addTodoList}
                delTodoList = {this.delTodoList}
                list = {list}
                iptVal = {iptVal}
                
                ></TodoListUI>
            </div>
        )
    }

    iptChange = (e)=>{
        store.dispatch(iptChangeAction(e.target.value))
    }
    addTodoList = ()=>{
        let {iptVal,list}  = store.getState()
        store.dispatch(delTodoAction(iptVal))
    }
    delTodoList = (idx) => {
        console.log(idx)
        store.dispatch(addTodoAction(idx))
    }
}
