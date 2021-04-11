
import  {Route,Switch,Link,Redirect,useRouteMatch} from 'react-router-dom'
import About from './components/About/index'
import Home from './components/Home/index'

function App() {
  return (
    <div className="App">
          <div>
            <ul>
              
                <OldSchoolMenuLink 
                  activeOnlyWhenExact={true}
                  to="/Home"
                  label="Home"
                />  
                <OldSchoolMenuLink 
                  to="/about"
                  label="about"
                />  
                  
            
              {/* <li>
                <Link  to = '/Home'>Home</Link>
              </li>
              <li>
                <Link to = '/About'>About</Link>
              </li> */}
            </ul>
          </div>
          <hr/>
          <Switch>
              {/* <Route exact path = '/Home' component = {Home}> */}
              <Route  path = '/Home'>
                <Home/>
              </Route> 
              <Route  path = '/about'>
                <About/>
              </Route>
              {/* 重定向 */}
              <Redirect to = '/about'></Redirect>
          </Switch>        
    </div>
  );
}

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <li className={match ? "active" : ""}>
      {match && "> "}
  
        <Link to={to}>{label}</Link>
    </li>
  );
}



export default App;
