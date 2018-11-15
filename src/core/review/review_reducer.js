import {review_action_types} from "./review_actions";

const initialState={
    
}

export const review_reducer = (state=initialState ,action) => {
    console.log(action)
    switch(action.type){
        case review_action_types.GET_REVIEW_INFO_SUCCESS:
            return {
                ...state,
                review:action.review,
                
            }
        case review_action_types.ADD_REVIEW_SUCCESS:
            return {
                ...state,
                review_id:action.id
            }
        default :
            return state
        }
    }