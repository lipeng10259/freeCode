import React, { Component } from 'react'
import Cat from './Cat/index'
import Mouse from './Mouse/index'
export default class CatWithMouse extends Component {
    render() {
        return (
            <div style = {{width:300,height:300,backgroundColor:'#000',position:'relative'}}>
                <Mouse render = {mouse => (<Cat mouse = {mouse}/>)}/>
            </div>
        )
    }
}
