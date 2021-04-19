import {createStore,applyMiddleware,combineReducers} from 'redux'  
import countReducer from './reducers/count_reducer'
import thunk from 'redux-thunk'

const allReducer = combineReducers({
    countData:countReducer
})

export default createStore(allReducer,applyMiddleware(thunk))