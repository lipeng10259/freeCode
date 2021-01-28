import React, { Component } from 'react'
import Item from './../Item'

export default class Todolist extends Component {
    render() {
        const {todolist} = this.props
        return (
            <div>
                {
                   todolist.map((item)=>{
                      return  <Item 
                      key = {item.id} 
                      name = {item.name} 
                      done = {item.done} 
                      id = {item.id} 
                      todoUpdate = {this.props.todoUpdate}
                      todoDetele = {this.props.todoDetele}
                      
                      />
                   }) 
                }
                
            </div>
        )
    }
}
