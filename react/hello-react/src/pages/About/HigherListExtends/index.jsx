import React, { Component } from 'react'
import {HigherOrderExtends} from '../HigherOrderExtends/index'
 class Higher2 extends Component {
     state = {
         name:'li'
     }
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
