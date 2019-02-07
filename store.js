import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {user} from './reducers/users'

const reducers = user //combine later

const store = createStore(reducers, applyMiddleware(thunk, logger))

export default store