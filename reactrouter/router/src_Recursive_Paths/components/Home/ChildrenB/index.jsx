import React, { Component } from 'react'
import {Link,Switch,Route} from 'react-router-dom'
import ChildrenC from './ChildrenC/index'
import ChildrenD from './ChildrenD/index'
export default class ChildrenB extends Component {
    componentDidMount () {

    }
    
    render() {
        let {url} = this.props.match
        return (
            <div>
                {url}
                <ul>
                    <li>
                        <Link to = '/Home/ChildrenB/ChildrenC'>ChildrenC</Link>
                    </li>
                    <li>
                        <Link to = '/Home/ChildrenB/ChildrenD'>ChildrenD</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path = '/Home/ChildrenB/ChildrenC' component = {ChildrenC}></Route>
                    <Route path = '/Home/ChildrenB/ChildrenD' component = {ChildrenD}></Route>
                </Switch>
            </div>
        )
    }
}
