
import About from '../pages/About/index'
import Home from '../pages/Home/index'
import App from '../App'
export  const routeConfig = [
    {
       path:'/',
       component:App,
    //    indexRoute:{component:Dashborard},
       childRoutes:[
           {
               path:'about',
               component:About
           },
           {
               path:"home",
               component:Home
           }
       ]
    }
]

// <Router>
//    <Switch> 

//     <Route  path = '/about' component = {About}/>
//     <Route  path = '/home' component = {Home}/>   
    
//     <Redirect to = '/about'/>  {/**重定向****/}
// </Switch>  
// </Router>

      