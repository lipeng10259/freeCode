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
                                // 像路由组件传递params参数
                                <li key={item.id}>
                                    <Link to = {`/home/message/detail/${item.id}`}>{item.title}</Link>

                                </li>
                            )
                        })
                    }                    
                </ul>
                <Route path = '/home/message/detail/:id' component = {Detail}/>
            </div>
        )
    }
}
