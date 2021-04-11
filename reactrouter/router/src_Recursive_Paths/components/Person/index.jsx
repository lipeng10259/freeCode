import React, { Component } from 'react'
import { Link, Switch ,Route,withRouter} from 'react-router-dom'
import Children from './Children'
 class Person extends Component {
    render() {
        let {params:{id},url} = this.props.match
        console.log(this)
        let person = find(Number(id))
        return (
            <div>
               
                <ul>
                {`${person.name} 的朋友!`}
                    {
                        person.friends.map((item,idx)=>{

                                let friend = find(item)

                                return <li key = {idx}> <Link to = {`${url}/${friend.id}`}>{friend.name} </Link> </li>
                                                                      
                        })
                    }                    
                </ul>
                
                <Switch>
                    <Route path = {`${url}/:id`}>
                        <Children/>
                    </Route>
                </Switch>
            </div>
        )
    }
}


const PEEPS = [
    { id: 0, name: "Michelle", friends: [1, 2, 3] },
    { id: 1, name: "Sean", friends: [0, 3] },
    { id: 2, name: "Kim", friends: [0, 1, 3] },
    { id: 3, name: "David", friends: [1, 2] }
  ];
  
  function find(id) {
    return PEEPS.find(p => p.id === id);
  }


  export default withRouter(Person)