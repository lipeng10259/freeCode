import React, { Component } from 'react'
import { Link, Switch ,Route,withRouter} from 'react-router-dom'

 class Person extends Component {
    render() {
        let {params:{id},url} = this.props.match
        console.log(id)
        let person = find(Number(id))
        console.log(person)
        return (
            <div>
               
                <ul>
                {`${person[0].name} 的朋友!`}
                    {
                        person.map((item)=>{
                            
                            return item.friends.map((f,idx)=>{
                                let friend = friends(f)

                                return <li key = {idx}> <Link to = {`${url}/${friend[0].id}/`}>{friend[0].name} </Link> </li>
                                
                            })
                        
                          
                        })
                    }                    
                </ul>
                
                <Switch>
                    <Route to = {`${url}/:id`}></Route>
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