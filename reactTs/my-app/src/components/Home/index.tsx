import React, { Component } from 'react'

interface Props {
    name: string;
    title: string;
  }

export default class index extends Component<Props,object> {
  
    render() {
        // const {title,name} = this.props
        console.log(this)
        return (

            <div>
              Home
            </div>
        )
    }
}
