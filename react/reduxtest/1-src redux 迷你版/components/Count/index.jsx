import React, { Component } from 'react'

// 引入store，用于获取redux中保存的状态
import store from '../../redux/store'
export default class Count extends Component {

    render() {
    
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
    componentDidMount(){
        // // 检测redux中状态的变化，只要变化，就测试render
        // store.subscribe(()=>{
        //     this.setState({})
        // })
    }
    increment = ()=>{
        // 通知redux 加 value
      const selectNumber =Number(this.selectNumber.value)

      store.dispatch({type:'increment',data:selectNumber})
    //   const {count} = this.state

    //   this.setState({count:count + selectNumber})
    }

    decrement = ()=>{
        const selectNumber =Number(this.selectNumber.value)
        // const {count} = this.state
  
        // this.setState({count:count - selectNumber})

        store.dispatch({type:'decrement',data:selectNumber})
    }
    incrementIfOdd = ()=>{
        const selectNumber =Number(this.selectNumber.value)
        // const {count} = this.state
        // if(selectNumber % 2 == 0){
        //     this.setState({count:count + selectNumber})
        // }

        if(selectNumber % 2 === 0){
    
            store.dispatch({type:'increment',data:selectNumber})
        }  
    }    
    incrementAsync = ()=>{
        const selectNumber =Number(this.selectNumber.value)
        // const {count} = this.state
        setTimeout(()=>{
            store.dispatch({type:'increment',data:selectNumber})
        },500)
    }    
}
