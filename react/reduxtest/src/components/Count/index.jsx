import React, { Component } from 'react'
// 引入store ，用户获取redux中保存的状态
import store from './../../redux/store'
import {
    createIncrementAction,
    createDecrementAction,
    createDecrementAsyncAction

} from './../../redux/count_action.js'

export default class Count extends Component {
    state = {
        count:0
    }
    // componentDidMount(){ 优化 在 index.js 中render
    //     // 检测redux 中状态的变化，只要变化，就调用rendux
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }
    render() {
        // const {count} = this.state
        console.log(this.props)
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

    increment = ()=>{
        const selectNumber =Number(this.selectNumber.value)
        this.props.jia(selectNumber)
    //   store.dispatch(createIncrementAction(selectNumber))
    }

    decrement = ()=>{
        const selectNumber =Number(this.selectNumber.value)

        store.dispatch(createDecrementAction(selectNumber))
    }
    incrementIfOdd = ()=>{
        const selectNumber =Number(this.selectNumber.value)
        const count = store.getState()
        if(count % 2 === 1){
            store.dispatch(createIncrementAction(selectNumber))
        }
    
    }
    incrementAsync = ()=>{
        const selectNumber =Number(this.selectNumber.value)
      
        store.dispatch(createDecrementAsyncAction(selectNumber,500))
       
    }    
}
