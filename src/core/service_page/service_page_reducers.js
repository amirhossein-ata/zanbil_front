import { service_page_action_types } from './service_page_actions'

const initialState = {
    service:undefined,
    sanses:[]
}

export const service_page_reducer = (state=initialState ,action) => {
    switch(action.type){
        case service_page_action_types.GET_SERVICE_PAGE_INFO_SUCCESS:
            return {
                ...state,
                service:action.service,
                sanses:[action.sanses]
            }
        default :
            return state
    }   
}   