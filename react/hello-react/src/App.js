import React from 'react'
import {Route,Switch} from 'react-router-dom'
import loadable from './utils/loadable'
import MyNavLink from './components/MyNavLink'
// import Home from './pages/Home'
const Home = loadable(()=>import('./pages/Home'))
const About = loadable(()=>import('./pages/About'))
const CatWithMouse = loadable(()=>import('./pages/CatWithMouse/index'))
// const MyNavLink = React.lazy(()=>import('./components/MyNavLink'))
// import About from './pages/About'
// import CatWithMouse from './pages/CatWithMouse/index'
// import CatWithMouse from './pages/CatWithMouse/index'


class App extends React.Component {

    render () {

        return (
            <div>   
                <div>
                    {/* Switch 组件，是使路由匹配成功之后，不在往下面匹配 */}
               
                    
                            <MyNavLink  to = '/about'>about</MyNavLink>
                            <br/> 
                            <MyNavLink  to = '/home'>home</MyNavLink>   
                            <br/> 
                            <MyNavLink  to = '/CatWithMouse'>CatWithMouse</MyNavLink>   
                            <br/> 
                            <div>  
                            {/* <Suspense callback = {<div>Loading</div>}> */}
                                <Switch> 
                                    <Route  path = '/about' component = {About}/>
                                    <Route  path = '/home' component = {Home}/>   
                                    <Route  path = '/CatWithMouse' component = {CatWithMouse}/>   
                                    {/* <Redirect to = '/about'/>   */}
                                </Switch>  
                            {/* </Suspense> */}
                            </div>                               
                   
                            
                </div>
            </div>
        )
    }
}

export default App