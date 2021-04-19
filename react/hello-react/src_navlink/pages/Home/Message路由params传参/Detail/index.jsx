import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
        console.log(this.props)
        const {params} = this.props.match
        return (
            <div>
                {params.id}
            </div>
        )
    }
}
