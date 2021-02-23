
import {
    combineReducers// 合并reducer
} from 'redux'

import count from './count'

// 引入redux-thunk，用于支持异步action ,需要redux引入 applyMiddleware

import person from './person'


// 汇总所有的reducer
export default combineReducers({
    count,
    person
})