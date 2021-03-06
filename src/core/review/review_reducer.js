import {review_action_types} from "./review_actions";

const initialState={
    reviews:[]
}

export const review_reducer = (state=initialState ,action) => {
    switch(action.type){
        case review_action_types.GET_REVIEW_SUCCESS:
            return {
                ...state,
                reviews:action.reviews,
                
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