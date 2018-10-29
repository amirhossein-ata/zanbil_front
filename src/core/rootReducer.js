import {combineReducers} from 'redux'
import {login_reducer} from './login&signup/login_signup_reducer'
import {business_page_reducer} from './business_page/business_page_reducers'
const rootReducer = combineReducers({
    login_reducer,
    business_page_reducer
})

export default rootReducer;