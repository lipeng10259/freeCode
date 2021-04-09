// import React, { Component } from 'react'
import { Link, Switch ,Route,useRouteMatch,useParams} from 'react-router-dom'

function Person () {
    let { url } = useRouteMatch();
    let { id } = useParams();
    let person = find(parseInt(id));
    return (
        <div>
            <ul>
            {`${person.name} 的朋友!`}
                {
                    person.friends.map((item,idx)=>{

                            let friend = find(item)

                            return <li key = {idx}> <Link to = {`${url}/${friend.id}/`}>{friend.name} </Link> </li>
                                                                  
                    })
                }                    
            </ul>
            
            <Switch>
                <Route path = {`${url}/:id`}>
                    <Person/>
                </Route>
            </Switch>
        </div>
    )
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


  export default Person 