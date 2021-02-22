// 引入 Count的UI组件
import countUI from '../../components/Count'
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
 from '../../redux/count_action.js'

 // mapStateToProps  函数的返回值是一个对象，作为状态转递给了ui组件porps的key value 就作为传递给ui组件props的value --- 用于传递状态

 function mapStateToProps(state) { // state默认传递过来
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


const countContainer = connect(mapStateToProps,mapDispatchToProps)(countUI)

// 使用connect 创建并暴露一个Count的容器组件
export default countContainer