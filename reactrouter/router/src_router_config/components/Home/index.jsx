import React, { Component } from 'react'
import {Link,Switch,Route} from 'react-router-dom'
import ChildrenB from './ChildrenB/index'
import ChildrenA from './ChildrenA/index'
export default class Home extends Component {
    componentDidMount(){}
    render() {
        console.log(this)
        return (
            
            <div> 
                Home  
               <ul>
                   <li>
                        <Link to = "/Home/childrenA">childrenA</Link>
                   </li>
                   <li>
                        <Link to = {`/Home/childrenB`}>childrenB</Link>
                   </li>
               </ul>
               <Switch>
                    <Route path = {`/Home/childrenA`} component = {ChildrenA}/>
                    <Route path = {`/Home/childrenB`} component = {ChildrenB}/>
               </Switch>
            </div>
        )
    }
}
