import React, { Component } from 'react'

export default class Item extends Component {
    state = {
        showBtn:false
    }
    render() {
        const {name,id,done} = this.props
        const {showBtn} = this.state
        return (
            <div onMouseEnter = {this.showDetele(true)} onMouseLeave = {this.showDetele(false)} style = {{backgroundColor:showBtn ? '#ddd' : '#fff'}}>
                <input type="checkbox" checked = {done} onChange = {this.todoChange(id)}/> {name}
                <button style = {{display:showBtn ? 'block' : 'none',float:'right'}} onClick = {this.todoDetele(id)}>删除</button>
            </div>
        )
    }

    todoChange = (id)=>{
       
        return (event)=>{
            this.props.todoUpdate(id,event.target.checked)
        }
        
    }
    showDetele = (type)=> {
        return ()=>{
             this.setState({showBtn:type})
        }  
    }
    todoDetele = (id)=>{
        return ()=>{
            this.props.todoDetele(id)
        }
    }
}
