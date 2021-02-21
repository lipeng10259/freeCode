import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import redcer from './reducer'

const store = createStore(redcer,applyMiddleware(thunk))

export default store