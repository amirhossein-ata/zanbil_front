import {add_business_action_type} from './add_business_actions'

const initialState = {
  business_id: undefined
}

export const add_business_reducer = (state = initialState , action) => {
    switch(action.type){
        case add_business_action_type.ADD_BUSINESS_SUCCESS:
            return{
                ...state,
                    business_id:action.id
            }
        
        default:
            return state
    }
}