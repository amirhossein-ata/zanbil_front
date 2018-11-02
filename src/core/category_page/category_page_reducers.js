import {category_page_action_types} from './category_page_actions'
const initialState = {
    businesses : []
}

export const category_page_reducer = (state=initialState ,action) => {
    console.log(action)
    switch(action.type){
        case category_page_action_types.GET_CATEGORY_BUSINESSES_SUCCESS:
            return {
                 ...state ,
                    businesses:[action.businesses]
            }
        default :
            return state
    }   
}