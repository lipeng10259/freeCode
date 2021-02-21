// 引入count ui
import CountUI from './../../components/Count/index'
 // 引入 connect 用于连接 redux

 import {connect} from 'react-redux'
import {
    createIncrementAction,
    createDecrementAction,
    createDecrementAsyncAction

}
 from './../../redux/count_action.js'
 // mapStateToProps  函数的返回值是一个对象，作为状态转递给了ui组件porps的key value 就作为传递给ui组件props的value --- 用于传递状态

 function mapStateToProps(state) {
    return {
        count:state
    }
 }
 //mapDispatchToProps 函数的返回值是一个对象，作为状态转递给了ui组件porps的key value 就作为传递给ui组件props的value ---用于传递操作状态的方法
 function mapDispatchToProps(dispatch) {
    return {
        increment:(data)=>{
            dispatch(createIncrementAction(data))

        },
        decrement:(data)=>{
            dispatch(createDecrementAction(data))

        },
        incrementAsync:(data,min)=>{
            dispatch(createDecrementAsyncAction(data,min))

        }

        
    }
 }

//  使用 connect 穿件并暴露一个connt 容器组件
 const CountContainer = connect(mapStateToProps,mapDispatchToProps)(CountUI)

 export default CountContainer