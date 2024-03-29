// 改文件专门暴露一个store对象，整个应用只有一个store对象
// 引入 createStore 专门用于创建store
import {
    createStore,
    applyMiddleware,
    combineReducers// 合并reducer
} from 'redux'
import countReducer from './reducers/count'

// 引入redux-thunk，用于支持异步action ,需要redux引入 applyMiddleware

import thunk from 'redux-thunk'
import personReducer from './reducers/person'

// 汇总所有的reducer
const allReducer = combineReducers({
    count:countReducer,
    person:personReducer
})

const store = createStore(allReducer,applyMiddleware(thunk))

export default store