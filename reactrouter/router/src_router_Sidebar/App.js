
import  {Route,Switch,Link,useRouteMatch} from 'react-router-dom'

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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/nomatch">nomatch</Link>
              </li>
            </ul>
            <Switch>
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

            </Switch>
          </div>
          <Switch>
              {
                routes.map((item,index)=>{
                  return <Route 
                    key = {index} 
                    path = {item.path} 
                    exact = {item.exact} 
                    component = {item.sidebar()}
                  ></Route>
                })
              }

            </Switch>
        </div> 

    </div>
  );
}



export default App;
