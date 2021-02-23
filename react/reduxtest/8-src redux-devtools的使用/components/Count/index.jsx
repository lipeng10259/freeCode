import React, { Component } from 'react'


export default class Count extends Component {

    render() {
       
        return (
            <div>
                <h1>当前求和为:{this.props.count}</h1>
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
    componentDidMount(){

    }
    increment = ()=>{
        // 通知redux 加 value
        const selectNumber =Number(this.selectNumber.value)
        this.props.increment(selectNumber)
    
 
    }

    decrement = ()=>{
        const selectNumber =Number(this.selectNumber.value)
        this.props.decrement(selectNumber)

    }
    incrementIfOdd = ()=>{
        const selectNumber =Number(this.selectNumber.value)
     

        if(selectNumber % 2 === 0){
            this.props.increment(selectNumber)
       
        }  
    }    
    incrementAsync = ()=>{
        const selectNumber =Number(this.selectNumber.value)
        this.props.incrementAsync(selectNumber,500)
    }    
}
