import React, { Component } from 'react'
import store from '../../redux/store'

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
        return (
            <div>
                <h1>当前求和为:{store.getState()}</h1>
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

      store.dispatch({type:'increment',data:selectNumber})
    }

    decrement = ()=>{
        const selectNumber =Number(this.selectNumber.value)

        store.dispatch({type:'decrement',data:selectNumber})
    }
    incrementIfOdd = ()=>{
        const selectNumber =Number(this.selectNumber.value)
        const count = store.getState()
        if(count % 2 === 1){
            store.dispatch({type:'increment',data:selectNumber})
        }
    
    }
    incrementAsync = ()=>{
        const selectNumber =Number(this.selectNumber.value)
        setTimeout(()=>{
            store.dispatch({type:'increment',data:selectNumber})
        },500)      
    }    
}
