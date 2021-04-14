<<<<<<< HEAD
import React, { Component } from 'react'

export default class NoMatch extends Component {
    render() {
        console.log(this)
        return (
            <div>
=======
import React, { Component,useEffect} from 'react'

export default class NoMatch extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        console.log(this)
        return (
            <div  style = {{height:"1000px"}}>
>>>>>>> 03024b85dbc4761b8961133b083f1cd561527758
                NOMATCH
            </div>
        )
    }
}
