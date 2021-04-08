
import  {Route,Switch,Link,Redirect} from 'react-router-dom'
import Person from './components/Person/index'
function App() {
  return (
    <div className="App">
        <div style = {{display:'flex'}}>
          <div style = {{
            padding:'10px',
            width:'40%',
            background:'#f0f0f0'
            
          }}>
            <Switch>
              <Route path = '/:id'>
                <Person />
              </Route>
              <Route path = '/'>
                <Redirect to = '/0'/>
              </Route>
            </Switch>
          </div>
          {/* <Switch>
              {
                routes.map((item,index)=>{
                  return <RouteWithSubRoutes key={index} {...item} />
                })
              }

            </Switch> */}
        </div> 

    </div>
  );
}
function RouteWithSubRoutes(route) {

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
