import React, { Component } from 'react'
import {useParams} from 'react-router-dom'

export default class HomeChildren extends Component {
    componentDidMount () {
    //    let {type} = useParams() 
    //    console.log(useParams())
       
    }
    
    render() {
        let {params}  = this.props.match
        console.log(params)
        return (
            <div>
                {params.type}
            </div>
        )
    }
}
