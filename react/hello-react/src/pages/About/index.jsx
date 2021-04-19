import React, { Component } from 'react'
import HigherList from './HigherList/index'
import HigherOrderExtends from './HigherListExtends/index'
export default class About extends Component {
    render() {
        return (
            <div>
                about
                <HigherList item = {{a:1,b:2}}></HigherList>
                <HigherOrderExtends/>
            </div>
        )
    }
}
