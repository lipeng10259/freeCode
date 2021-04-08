
import  {Route,Switch,Link,Redirect} from 'react-router-dom'
import About from './components/About/index'
import Home from './components/Home/index'

function App() {
  return (
    <div className="App">

          <div>
            <ul>
              <li>
                <Link  to = '/Home'>Home</Link>
              </li>
              <li>
                <Link to = '/About'>About</Link>
              </li>
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

export default App;
