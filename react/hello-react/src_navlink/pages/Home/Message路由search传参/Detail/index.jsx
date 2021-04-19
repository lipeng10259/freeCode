import React, { Component } from 'react'
import qs from 'querystring'

export default class Detail extends Component {
    render() {
        console.log(this.props)
        const search = this.props.location.search
        // const {id,title} = qs.parse(search.splice(1))
        const {id,title} = qs.parse(search.slice(1))
        return (
            <div>
                {id}---{title}
            </div>
        )
    }
}
