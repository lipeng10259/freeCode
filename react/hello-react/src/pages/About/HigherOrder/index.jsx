import React, { Component } from 'react'

export const MyContainer = (WrapComponent)=> {
    return class extends Component {
        state = {
            name :'li'
        }
        render () {
            const newProps = Object.assign({},{a:1,onClick:this.btnClick},this.props)
            return <div>
                {this.state.name}
                 
                <WrapComponent {...newProps}/>       
                
            
            </div>
            
        }

        btnClick = ()=>{
            this.setState({name:'p'})
        }

    }
}
