
import  {Route,Switch, Link} from 'react-router-dom'
import {routes} from './routeConfig/routes'



function App() {
  return (
    <div className="App">
      <ul>
        {

            routes.map((route,idx)=>{

             return <li key = {idx}>
                <Link to = {route.path}>{route.path}</Link>
              </li>

            })
          }  
      </ul>
      <Switch>
          {
            routes.map((route,idx)=>{

             return <SubRouter key={idx} {...route} />

            })
          }       
      </Switch>
    </div>
  );
}

function SubRouter (route) {

  return <Route 
      path = {route.path}
      render = {
        props=>(
    
            <route.component {...props} routes = {route.routes}  />
          
        )
      }
    >
         

        </Route>

}









export default App;
