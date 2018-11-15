import {user_info_action_types} from "./user_info_actions"

const initialState = {
    user:[]

}

export const user_info_reducer = (state=initialState ,action) => {
    console.log(action)
    switch(action.type){
        case user_info_action_types.USER_INFO_SUCCESS:
            return {
                ...state,
                    user:action.user_info,
                    
            }
        default :
            return state
    }   
}