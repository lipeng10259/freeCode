// 改文件专门暴露一个store对象，整个应用只有一个store对象
// 引入 createStore 专门用于创建store
import {createStore,applyMiddleware} from 'redux'
import countReducer from './count_reducer'

// 引入redux-thunk，用于支持异步action ,需要redux引入 applyMiddleware

import thunk from 'redux-thunk'

const store = createStore(countReducer,applyMiddleware(thunk))

export default store