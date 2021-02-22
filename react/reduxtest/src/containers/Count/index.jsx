import React, { Component } from 'react'
// 引入 Count的UI组件
// import countUI from './../../components/Count'
// // 容器组件的store 需要在app.js里面通过props传入，不能直接引入
// import store from './../../redux/store'

// 引入connect用于连接ui组件与redux
import  {connect} from 'react-redux'

// 引入action
import {
    createIncrementAction,
    createDecrementAction,
    createDecrementAsyncAction

}
 from './../../redux/count_action.js'


class countUI extends Component {

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




// 映射状态
 // mapStateToProps  函数的返回值是一个对象，作为状态转递给了ui组件porps的key value 就作为传递给ui组件props的value --- 用于传递状态
// state默认传递过来
// const mapStateToProps =  state => ({count:state})

// 映射状态的方法
 //mapDispatchToProps 函数的返回值是一个对象，作为状态转递给了ui组件porps的key value 就作为传递给ui组件props的value ---用于传递操作状态的方法
// const mapDispatchToProps = dispatch => ({
//         increment:(data)=>{
//             dispatch(createIncrementAction(data))

//         },
//         decrement:(data)=>{
//             dispatch(createDecrementAction(data))

//         },
//         incrementAsync:(data,min)=>{
//             dispatch(createDecrementAsyncAction(data,min))

//         }   
//     })


// const countContainer = connect(mapStateToProps,mapDispatchToProps)(countUI)
const countContainer = connect(
    state => ({count:state}),
    // mapDispatchToProps 的一般写法
    // dispatch => ({
    //     increment:(data)=>{
    //         dispatch(createIncrementAction(data))

    //     },
    //     decrement:(data)=>{
    //         dispatch(createDecrementAction(data))

    //     },
    //     incrementAsync:(data,min)=>{
    //         dispatch(createDecrementAsyncAction(data,min))

    //     }   
    // }),
    // mapDispatchToProps 的精简写法
    {
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createDecrementAsyncAction 
    }

    )(countUI)

// 使用connect 创建并暴露一个Count的容器组件
export default countContainer