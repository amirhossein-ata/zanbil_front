import { service_page_action_types } from './service_page_actions'

const initialState = {
    service:undefined,
    sanses:[],
    start_of_week_date:''
}

export const service_page_reducer = (state=initialState ,action) => {
    
    switch(action.type){
        case service_page_action_types.GET_SERVICE_PAGE_INFO_SUCCESS:
            console.log("action in service_page is", action)
            return {
                ...state,
                service:action.service,
                sanses:[action.sanses],
                start_of_week_date:action.start_of_week_date
            }
        default :
            return state
    }   
}   