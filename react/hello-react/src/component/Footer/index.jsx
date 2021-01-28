import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        console.log(1)
        const {todolist} = this.props
        const activeTodo = todolist.reduce((pre,todo)=>pre + (todo.done ? 1 : 0),0)
        const total = activeTodo.length
        console.log(activeTodo)
        return (
            <div>
                  <br/>
                  <br/>
                <input type="checkbox" checked = {activeTodo === todolist.length && activeTodo!==0 ? true : false } onChange = {this.todoChange} name="" id=""/>
                 {activeTodo}/{todolist.length}
              
                <button>
                   删除 
                </button>
                

            </div>
        )
    }

    todoChange = (event)=>{
   
            console.log(event)
      
    }
}
