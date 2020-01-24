import { createStore } from 'redux'
import { combineReducers } from 'redux'
import user from './userReducer'
import userList from './userListReducer'

const rootReducer = combineReducers({
    user: user,
    userList: userList
})
const store = createStore(rootReducer)


export default store