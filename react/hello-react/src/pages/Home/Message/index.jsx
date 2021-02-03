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
                                    {/* push模式 */}
                                    {/* <Link to = {{pathname:'/home/message/detail',state:{id:item.id,title:item.title}}}>{item.id}</Link>  */}
                                    {/* replace模式 */}
                                    <Link replace = {true} to = {{pathname:'/home/message/detail',state:{id:item.id,title:item.title}}}>{item.title}</Link>
                                    <button  onClick = {()=>this.pushShow(item.id,item.title)}>push查看</button> 
                                    <button onClick = {()=>this.replaceShow(item.id,item.title)}>replace查看</button> 
                                </li>
                            )
                        })
                    }                    
                </ul>
                <Route path = '/home/message/detail' component = {Detail}/>
            </div>
        )
    }

    replaceShow = (id,title)=> {
        // 编程式导航 携带params 参数 replace
        // this.props.history.replace(`/home/message/detail${id}/${title}`) 

        //   // 编程式导航  query 参数 replace
        //   this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)   
          // 编程式导航  state 参数 replace
          this.props.history.replace(`/home/message/detail`,{id:id,title:title}) 
    }

    pushShow = (id,title)=> {
        // 编程式导航 携带params 参数 replace
        // this.props.history.replace(`/home/message/detail${id}/${title}`) 

        // 编程式导航  query 参数 replace
        this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`) 

        
        // 编程式导航  state 参数 replace
        this.props.history.replace(`/home/message/detail`,{id:id,title:title}) 
    }
}
