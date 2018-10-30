import {combineReducers} from 'redux'
import {business_page_reducer} from './business_page/business_page_reducers'
import {session_reducer} from './login&signup/session_reducer'
const rootReducer = combineReducers({
    business_page_reducer
    session_reducer
})

export default rootReducer;