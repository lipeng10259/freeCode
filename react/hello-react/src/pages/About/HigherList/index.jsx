import React, { Component } from 'react'
import {MyContainer} from './../HigherOrder/index'
 class Higher1 extends Component {
    render() {
        return (
            <div>
                HIGHERORDER
            </div>
        )
    }
}

export default MyContainer(Higher1)
