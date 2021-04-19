import React, { Component,useEffect} from 'react'

export default class NoMatch extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        console.log(this)
        return (
            <div  style = {{height:"1000px"}}>
                NOMATCH
            </div>
        )
    }
}
