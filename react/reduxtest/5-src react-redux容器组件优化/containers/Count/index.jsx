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