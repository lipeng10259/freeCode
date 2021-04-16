import React, { Component } from 'react'
import store from './../../redux/store'
import {createDecrementAction,createIncrementAction,createAsynccrementAction} from './../../redux/count_action'


interface StateType {
    selectVal:number,
    incrementVal:number
}
export default class Increment extends Component {
    state:StateType = {
        selectVal: 1,
        incrementVal:0
    }
    render() {
        let count = store.getState()
        const {selectVal} = this.state
        return (
            <div>
                <h1>当前求和为 {count}</h1>

                <hr/>
                <select value = {selectVal} onChange = {this.selectChange}>
                    <option value = '1'>1</option>
                    <option value = '2'>2</option>
                    <option value = '3'>3</option>
                    <option value = '4'>4</option>
                </select>
                <hr/>
                <button onClick = {this.decrement}>-</button>
                <button onClick = {this.increment}>+</button>
                <hr/>
                <button onClick = {this.oddIncrement}>奇数加</button>
                <button onClick = {this.asyncIncrement}>异步加</button>
            </div>
        )
    }

    selectChange = (event: React.ChangeEvent<HTMLSelectElement>)=>{
        this.setState({selectVal:Number(event.target.value)})
    }

    increment = ()=> {
        // let {selectVal} = this.state
        let count = store.getState()
        store.dispatch(createIncrementAction(count))
        // this.setState({incrementVal:incrementVal + selectVal})
    }
    decrement = ()=> {
        // let {incrementVal,selectVal} = this.state
        let count = store.getState()
        store.dispatch(createDecrementAction(count))
    }
    asyncIncrement =()=>{
        let count = store.getState()
        store.dispatch(createAsynccrementAction(count,500))
    }
    oddIncrement = ()=>{
        let count = store.getState()
        if(count % 2 !== 0) {
            store.dispatch(createIncrementAction(count))
        }
        
    }
}
