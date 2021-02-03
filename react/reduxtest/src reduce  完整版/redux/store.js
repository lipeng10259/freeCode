// 改文件专门用于暴露一个store对象，整个应用只有一个store对象


// 引入createStore，专门用于创建redux中最为核心的store
import {createStore} from 'redux'

// 引入为Count 组件服务的reducer

import countReducer from './count_reducer'

const srore = createStore(countReducer)

export default srore