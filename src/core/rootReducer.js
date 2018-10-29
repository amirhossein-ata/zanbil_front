import {combineReducers} from 'redux'
import {login_reducer} from './login&signup/login_signup_reducer'
const rootReducer = combineReducers({
    login_reducer
})

export default rootReducer;