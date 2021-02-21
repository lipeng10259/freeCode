// 改文件专门暴露一个store对象，整个应用只有一个store对象
// 引入 createStore 专门用于创建store
import {createStore} from 'redux'
import countReducer from './count_reducer'

const store = createStore(countReducer)

export default store