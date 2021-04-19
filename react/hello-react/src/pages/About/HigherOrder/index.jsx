import React, { Component } from 'react'

export const MyContainer = (WrapComponent)=> {
    return class extends Component {
        render () {
            return <WrapComponent {...this.props}/>
        }

    }
}
