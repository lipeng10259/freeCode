import React, { Component } from 'react'
import {MyContainer} from './../HigherOrder/index'
 class Higher1 extends Component {
    render() {
        return (
            <div>
        
                HIGHERORDER {this.props.a}
                <button {...this.props}>点击</button>
            </div>
        )
    }
}

export default MyContainer(Higher1)
