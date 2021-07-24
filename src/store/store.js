import { createStore } from 'redux';
import { combineReducers } from 'redux';
import {testReducer} from './redusers/testReducer.js'
import {usersReducer} from './redusers/usersReducer.js'
import { applyMiddleware } from 'redux';


let redusers = combineReducers({
	test: testReducer,
	users: usersReducer 
})


const store = createStore(redusers)


window.store = store

export default store;