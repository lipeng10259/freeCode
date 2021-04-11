
import  {Route,Switch,Link} from 'react-router-dom'
import {routes} from './routeConfig/routes'
function App() {
  return (
    <div className="App">
        <div style = {{display:'flex'}}>
          <div style = {{
            padding:'10px',
            width:'40%',
            background:'#f0f0f0'
            
          }}>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/nomatch">nomatch</Link>
              </li>
            </ul>
            {/* <Switch>
              {
                routes.map((item,index)=>{
                  return <Route 
                    key = {index} 
                    path = {item.path} 
                    exact = {item.exact} 
                    children = {<item.main />}
                  ></Route>
                })
              }

            </Switch> */}
          </div>
          <Switch>
              {
                routes.map((item,index)=>{
                  return <RouteWithSubRoutes key={index} {...item} />
                })
              }

            </Switch>
        </div> 

    </div>
  );
}
function RouteWithSubRoutes(route) {
  console.log(route)
  return (
    <Route
      path={route.path}
      render={props =>(
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}



export default App;
