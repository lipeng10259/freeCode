import React, { Component } from 'react'
import Item from './Item/index'
import PubSub from 'pubsub-js'
export default class About extends Component {

    render() {
        return (
            <div onClick = {this.aboutThis}>
               <Item data = {[{a:1,b:3}]}></Item>
                <button onClick = {this.publishEvent}>发布消息</button>
            </div>
        )
    }

    aboutThis = ()=>{
        console.log(this)
    }

    publishEvent = (e)=> {
        PubSub.publish("event_bus",'hello world')
        e.stopPropagation()
    }

}
