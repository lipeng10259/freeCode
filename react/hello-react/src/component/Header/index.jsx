import React, { Component } from 'react'
import {nanoid} from 'nanoid'
export default class Header extends Component {
    render() {
      
        return (
            <div>
                <input onKeyUp = {this.iptChange} type = 'text'/>
            </div>
        )
    }
    iptChange = (event)=>{
        if(event.target.value.trim()!==''){
            if(event.keyCode === 13){
                let obj = {}
                obj.name= event.target.value
                obj.id = nanoid()
                obj.done = false
                this.props.addTodo(obj)
                event.target.value = ''
            }
            
        }else{
            alert('内容不能为空')
        }
    }
}
