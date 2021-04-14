import React, { Component } from 'react'
<<<<<<< HEAD
import {Link,Switch,Route} from 'react-router-dom'
import ChildrenB from './ChildrenB/index'
import ChildrenA from './ChildrenA/index'
export default class Home extends Component {
    componentDidMount(){}
    render() {
    
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
=======
export default class Home extends Component {
    render() {
        console.log(this)
        return (
            <ScrollRestoration>
                        <div style = {{height:"1000px"}}> 
                Home  
          
            </div>   
            </ScrollRestoration>
 
>>>>>>> 03024b85dbc4761b8961133b083f1cd561527758
        )
    }
}
