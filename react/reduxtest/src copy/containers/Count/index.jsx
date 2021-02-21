// 引入Count Ui 组件 

import CountUI from '../../components/Count'
// 引入store
// import store from '../../redux/store'
// 引入connect 用于连接ui组件和redux
import { connect } from 'react-redux'

function a(state) {
    return {
        count:state
    }
}
 
function b (dispath) {
    return {
        jia:(data)=>{
            // 通知redux执行加法
            dispath({type:'increment',data:data})
        }
    }
}

const countContainer = connect(a,b)(CountUI)

export default countContainer
