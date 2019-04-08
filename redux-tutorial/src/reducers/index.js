import { combineReducers } from 'redux'
import dodos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    todos, 
    visibilityFilter
})