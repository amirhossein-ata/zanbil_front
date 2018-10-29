import {login_action_types} from './login_actions'

const initialState = {
    logged_in : false,
    login_error : false
}

export const login_reducer = (state = initialState , action) => {
    switch(action.type){
        case login_action_types.LOGIN_SUCCESS:
            return{
                ...state,
                    logged_in:true
            }
        case login_action_types.LOGOUT_SUCCESS :
            return{
                ...state,
                    logged_in:false    
            }
        case login_action_types.LOGIN_FAILURE:
            return{
                ...state,
                    login_error:'کاربری با این مشخصات یافت نشد.'
            }
        default:
            return state
    }
}