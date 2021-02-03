import React, { Component } from 'react'

export default class Count extends Component {
    state = {
        count:0
    }
    render() {
        const {count} = this.state
        return (
            <div>
                <h1>当前求和为:{count}</h1>
                <select ref = {c=>this.selectNumber=c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select><br/>
                <button onClick = {this.increment}>+</button><br/>
                <button onClick = {this.decrement}>-</button><br/>
                <button onClick = {this.incrementIfOdd}>当前求和为奇数再加</button><br/>
                <button onClick = {this.incrementAsync}>异步加</button>
            </div>
        )
    }

    increment = ()=>{
      const selectNumber =Number(this.selectNumber.value)
      const {count} = this.state

      this.setState({count:count + selectNumber})
    }

    decrement = ()=>{
        const selectNumber =Number(this.selectNumber.value)
        const {count} = this.state
  
        this.setState({count:count - selectNumber})
    }
    incrementIfOdd = ()=>{
        const selectNumber =Number(this.selectNumber.value)
        const {count} = this.state
        setTimeout(()=>{
            this.setState({count:count + selectNumber})
        },500)        
    }
    incrementAsync = ()=>{
          
    }    
}
