import React, { Component } from 'react'
import {HigherOrderExtends} from '../HigherOrderExtends/index'
 class Higher2 extends Component {
     state = {
         name:'li'
     }
    
    render() {
        console.log(this)
        return (
            <div>
                HIGHERORDEREXTENDS {this.props.sex}
            </div>
        )
    }
}

export default HigherOrderExtends(Higher2)
