import React, { Component } from 'react'

export default class Mouse extends Component {
    state = {
        x:0,
        y:0
    }
    render() {
        return (
            <div className = 'div'>
                <div style = {{width:300,height:300}} onMouseMove = {this.handleMouseMove}>
                    {this.props.render(this.state)}
                </div>
                
                {<p>The current mouse position is ({this.state.x}, {this.state.y})</p>}
            </div>
        )
    }

    handleMouseMove = (event)=>{
        console.log(event)
        this.setState({
            x:event.clientX,
            y:event.clientY - 151
        })
    }
}
