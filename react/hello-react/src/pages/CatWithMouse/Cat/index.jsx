import React, { Component } from 'react'

export default class Cat extends Component {
    render() {
        const mouse = this.props.mouse
        return (
            <div style = {{backgroundColor:'red',position:'absolute',left:mouse.x,top:mouse.y,width:10,height:10}}>


            </div>
        )
    }
}
