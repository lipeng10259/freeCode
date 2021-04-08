import React, { Component } from 'react'

export default class New extends Component {
    render() {
        console.log(this)
        return (
            <div>
                New {this.props.match.params.type}
            </div>
        )
    }
}
