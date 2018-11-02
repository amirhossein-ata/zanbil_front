import {combineReducers} from 'redux'
import {business_page_reducer} from './business_page/business_page_reducers'
import {session_reducer} from './login&signup/session_reducer'
import {add_business_reducer} from './add_business/add_business_reducer'
import {add_service_reducer} from './add_service/add_service_reducer'
import {category_page_reducer} from './category_page/category_page_reducers'
const rootReducer = combineReducers({
    business_page_reducer,
    session_reducer,
    add_business_reducer,
    add_service_reducer,
    category_page_reducer
})

export default rootReducer;