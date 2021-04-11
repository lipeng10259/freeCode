import React, { Component, useState }  from 'react'

export default class About extends Component {
    render() {
        let [isBlocking, setIsBlocking] = useState(false);
        return (
            <div>
                   <Prompt
                        when={isBlocking}
                        message={location =>
                        `Are you sure you want to go to ${location.pathname}`
                        }
                    />
                <input onChange = { Event => { this.setIsBlocking(Event.target.value.length > 0,setIsBlocking)}} type="text"/>
            </div>
        )
    }

    setIsBlocking = (blo,callback) =>{
        setIsBlocking(blo)
    }
}
