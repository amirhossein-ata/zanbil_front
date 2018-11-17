import {reserve_action_types} from './reserve_actions'

const initialState={
    reserve_success:false
}

export const reserve_reducer = (state=initialState,action) => {
    switch (action.type) {
        case reserve_action_types.RESERVE_SUCCESS:
            return{
                ...state,
                reserve_success:true
            }
    
        default:
            return state
    }
}