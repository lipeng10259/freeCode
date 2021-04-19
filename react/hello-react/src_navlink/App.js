import React from 'react'
// import {Route,Switch,Redirect} from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
import MyNavLink from './components/MyNavLink'

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
                        <br/>
                        <br/>
                        <br/> 
                        <div>  
                    
                            {/* <Switch> 
                          
                                <Route  path = '/about' component = {About}/>
                                <Route  path = '/home' component = {Home}/>   
                                
                                <Redirect to = '/about'/>  
                            </Switch>  */}
                        </div>           
                </div>
            </div>
        )
    }
}

export default App