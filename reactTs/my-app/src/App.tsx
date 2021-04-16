import React, {ReactNode } from 'react';
import {Link,Route,Switch} from 'react-router-dom'
import Hello from './components/Hello/index'
import Home from './components/Home/index'
import About from './components/About/index'
import Increment from './containers/Increment/index'
import {routes} from './routerConfig/routes.js'
// import store from './redux/store'

function App() {
  return (
    <div className="App">
      <ul>
        {
          routes.map((route,idx)=>{
            return( <li  key = {idx}>
                    <Link to = {route.path}>{route.title}</Link>
                  </li>)
          })
        }        
      </ul>
      <Switch>
        <Route path = '/home' component = {Home}></Route>
        <Route path = '/hello' component = {Hello}></Route>
        <Route path = '/about' component = {About}></Route>
        <Route path = '/Increment' component = {Increment}></Route>

      </Switch>
  

    </div>
  );
}

export interface RouterInter {
  path:string,
  title:string
  routes:any,
  component:ReactNode

}

// function SwitchRouter(route:any) {
//   return (
//     <Route path = {route.path} 
//       render = {
//         (props)=>{
//           return <route.component {...props}  routes = {route.routes}/>
//         }
        
//       } 
//     />
//   )
// }

export default App;
