import React from 'react'
import {Link,Switch,Route} from 'react-router-dom'

import Home from './../Home/index'
export interface Props  {
    name:string,
    enthusiasmLevel?:number
}


function Hello ({name = 'LI',enthusiasmLevel = 1}:Props) {
    if(enthusiasmLevel <= 0) {
        throw new Error ("You could be a little more enthusiastic. :D")
    }

    return (
        <div>
            <div>
            <Link to = '/hello/home'>Home</Link>
                {/* hello {name + enthusiasmLevel} */}
            </div>
            <Switch>
                <Route path  = '/hello/home' component = {Home}></Route>
            </Switch>
        </div>
    )
}


export default Hello