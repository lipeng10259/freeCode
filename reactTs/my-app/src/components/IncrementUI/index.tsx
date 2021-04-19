import React, { Component } from 'react'

interface StateType {
    selectVal:number,
    incrementVal:number
}
interface Props {
    count:number,
    createIncrementAction:(data:number)=>void;
    createDecrementAction:(data:number)=>void;

}
export default class IncrementUI extends Component<Props,object> {
    state:StateType = {
        selectVal: 1,
        incrementVal:0
    }
    render() {
        const {selectVal} = this.state
        return (
            <div>
                <h1>当前求和为 {this.props.count}</h1>
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
        let {selectVal} = this.state
        this.props.createIncrementAction(selectVal)
    }
    decrement = ()=> {
        let {selectVal} = this.state
        this.props.createDecrementAction(selectVal)
    }
    asyncIncrement =()=>{
        let {selectVal} = this.state
        setTimeout(()=>{
            this.props.createIncrementAction(selectVal)
        },500)
        // this.props.createAsyncIncrementAction(selectVal,500)
    }
    oddIncrement = ()=>{
        let {selectVal} = this.state
        let count = this.props.count as number
        if((count ) % 2 !== 0) {
            this.props.createIncrementAction(selectVal)
        }  
    }
}
