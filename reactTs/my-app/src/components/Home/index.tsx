import React, { Component } from 'react'
import Item from './Item/index'

export default class index extends Component{
    state = {
        data:[
            {a:1,b:2,c:3},
            {a:11,b:21,c:31},
            {a:12,b:23,c:34},
        ]
        
    }
    render() {
        let {data} = this.state
        return (
                <div>
                    <Item data = {data}></Item>
                </div>
            )                
            

    }

    // stopEvent = function (){
        
    // }
    // alertEvent (e:React.MouseEvent) {
    //     console.log(e) 
    //     // e.preventDefault()
    //     // e.stopPropagation()
    // }
    // eventFnc = (e:React.MouseEvent)=>{
       
    //     console.log(3)
    //     e.stopPropagation()
    // }
}
