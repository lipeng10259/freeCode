import React, { Component } from 'react'
import {HigherOrderExtends} from '../HigherOrderExtends/index'
 class Higher2 extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        console.log(this)
        return (
            <div>
                HIGHERORDEREXTENDS {this.props.name}
            </div>
        )
    }
}

export default HigherOrderExtends(Higher2)
