import React, { Component } from 'react'

export default class TodoListUI extends Component {
    render() {
        return (
            <div>
                <input type="text"  placeholder = {this.props.iptVal} value = {this.props.iptVal} onChange = {this.props.iptChange} /> 
                <input type="button" value="添加" onClick = {this.props.addTodoList}/>
                {this.props.iptVal}
                <ul>
                    {  
                        this.props.list.map((element,idx) => {
                            return <li key = {idx}>{element} 
                            <input type="button" onClick = {this.delTodoList(idx)}  value="删除"/>
                        </li>  
                        })
                    }                  
                </ul>
            </div>
        )
    }

    delTodoList = (idx)=>{
        return ()=>{
            this.props.delTodoList(idx)
        }
    }
}
