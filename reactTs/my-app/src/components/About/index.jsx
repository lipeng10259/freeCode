import React, { Component } from 'react'
import Item from './Item/index'
export default class About extends Component {
    render() {
        return (
            <div onClick = {this.aboutThis}>
               <Item data = {[{a:1,b:3}]}></Item>
            </div>
        )
    }

    aboutThis = ()=>{
        console.log(this)
    }
}
