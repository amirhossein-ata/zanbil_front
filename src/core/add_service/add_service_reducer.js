import {add_service_action_type} from './add_service_actions'

const initialState = {
  service_id: undefined
}

export const add_service_reducer = (state = initialState , action) => {
    switch(action.type){
        case add_service_action_type.ADD_SERVICE_SUCCESS:
            return{
                ...state,
                    service_id:action.id
            }
        case add_service_action_type.SET_SERVICE_INFORMATION:
            return{
                ...state,
                    service: action.service
            }
        default:
            return state
    }
}