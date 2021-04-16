import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import Item from './Item/index';



export default class index extends Component{
    state = {
        data:[
            {a:1,b:2,c:3},
            {a:11,b:21,c:31},
            {a:12,b:23,c:34},
        ]
        
    }
    componentDidMount(){
        PubSub.subscribe('event_bus',this.eventBus)
    }
    componentWillUnmount(){
        PubSub.unsubscribe('event_bus')
    }
    render() {
        let {data} = this.state
        return (
                <div>
                    <Item data = {data}></Item>
                </div>
            )                
            

    }
    eventBus = (data:string)=>{
        console.log(data)
    }
}
