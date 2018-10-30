import {combineReducers} from 'redux'
import {session_reducer} from './login&signup/session_reducer'
const rootReducer = combineReducers({
    session_reducer
})

export default rootReducer;