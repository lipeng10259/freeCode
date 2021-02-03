import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from './Detail'


export default class Message extends Component {
    state = {
        messageArr:[
            {id:1,title:'111'},
            {id:2,title:'222'},
            {id:3,title:'333'}
        ]       
    }
    render() {

        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map((item)=>{
                            return (
                                // 向路由组件传递search参数
                                <li key={item.id}>
                                    <Link to = {`/home/message/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link>

                                </li>
                            )
                        })
                    }                    
                </ul>
                <Route path = '/home/message/detail' component = {Detail}/>
            </div>
        )
    }
}
