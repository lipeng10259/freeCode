
import  {Route,Switch,Redirect} from 'react-router-dom'
import Person from './components/Person/index'
console.log(Person)
function App() {
  return (
    <div className="App">
        <div style = {{display:'flex'}}>
          <div style = {{
            padding:'10px',
            width:'40%',
            background:'#f0f0f0'
            
          }}>
            11111
            <Switch>
              <Route path = '/:id'>
                <Person />
              </Route>
              <Route path = '/'>
                <Redirect to = '/0'/>
              </Route>
            </Switch>
          </div>
 
        </div> 

    </div>
  );
}




export default App;
