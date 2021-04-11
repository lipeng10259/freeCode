
import  {Router,Route,Switch,Link} from 'react-router-dom'
import About from './components/About/index'
import Home from './components/Home/index'
import New from './components/About/New/index'
import HomeChildren from './components/Home/Children/index'

function App() {
  return (
    <div className="App">

          <div>
            <ul>
              <li>
                <Link  to = '/'>Home</Link>
              </li>
              <li>
                <Link to = '/About'>About</Link>
              </li>
              <li>
                <Link to = '/about/info'>info</Link>
              </li>
              <li>
                <Link to = '/about/new'>new</Link>
              </li>
              <li>
                <Link to = '/home/1'>1</Link>
              </li>
              <li>
                <Link to = '/home/2'>2</Link>
              </li>
            </ul>
          </div>
          <hr/>
          <Switch>
              <Route exact path = '/' component = {Home}/>
              <Route exact path = '/about' component = {About}/>
              <Route  path = '/about/:type' component = {New}/>
              <Route  path = '/home/:type' component = {HomeChildren}/>

              
          </Switch>        
    </div>
  );
}

export default App;
