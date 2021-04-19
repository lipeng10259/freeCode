import React, {ReactNode,lazy,Suspense} from 'react';
import {Link,Route,Switch} from 'react-router-dom'
import {routes} from './routerConfig/routes'
const Hello = lazy(()=>import('./components/Hello/index'))
const Home = lazy(()=>import('./components/Home/index'))
const About = lazy(()=>import('./components/About/index'))
const Increment = lazy(()=>import('./containers/Increment/index'))
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
        <Suspense fallback = {<h1>loading.....</h1>}>
          <Route path = '/home' component = {Home}></Route>
          <Route path = '/hello' component = {Hello}></Route>
          <Route path = '/about' component = {About}></Route>
          <Route path = '/Increment' component = {Increment}></Route>
        </Suspense>
   

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
