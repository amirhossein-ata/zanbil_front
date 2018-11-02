import {business_page_action_types} from './business_page_actions'

const initialState = {
    services : [],
    business:undefined
}

export const business_page_reducer = (state=initialState ,action) => {
    console.log(action)
    switch(action.type){
        case business_page_action_types.GET_SERVICES_SUCCESS:
            return {
                ...state,
                    business:action.business_info,
                    services:[action.services]
            }
        default :
            return state
    }   
}