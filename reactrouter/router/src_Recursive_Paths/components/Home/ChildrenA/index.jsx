import React, { Component } from 'react'
import {useParams} from 'react-router-dom'

export default class ChildrenA extends Component {
    componentDidMount () {
    //    let {type} = useParams() 
    //    console.log(useParams())
       
    }
    
    render() {
        let url = this.props.match.url
        return (
            <div>
                {url}
            </div>
        )
    }
}
