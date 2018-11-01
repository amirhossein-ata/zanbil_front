import {session_action_types} from './session_actions'

const initialState = {
    logged_in : false,
    login_error : false
}

export const session_reducer = (state = initialState , action) => {
    switch(action.type){
        case session_action_types.LOGIN_SUCCESS:
            return{
                ...state,
                    logged_in:true
            }
        case session_action_types.LOGOUT_SUCCESS :
            return{
                ...state,
                    logged_in:false    
            }
        case session_action_types.LOGIN_FAILURE:
            return{
                ...state,
                    login_error:'کاربری با این مشخصات یافت نشد.'
            }
        default:
            return state
    }
}