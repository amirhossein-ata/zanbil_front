import {business_page_action_types} from './business_page_actions'

const initialState = {
    services : []
}

export const business_page_reducer = (state=[] ,action) => {
    console.log(action)
    switch(action.type){
        case business_page_action_types.GET_SERVICES_SUCCESS:
            return [
                 ...state ,
                    action.services
            ]
        default :
            return state
    }   
}