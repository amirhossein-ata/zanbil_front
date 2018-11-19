import {search_action_types} from './search_actions'

const initialState={
    form_open:false,
    search_results:[]
}

export const search_reducer = (state=initialState,action) => {
    switch (action.type) {

        case search_action_types.SEND_SEARCH_FILTERS_SUCCESS:
            return{
                ...state,
                search_results : action.search_results
            }

        case search_action_types.OPEN_SEARCH_FORM:
            return{
                ...state,
                form_open:true
            }
        
        case search_action_types.CLOSE_SEARCH_FORM:
            return{
                ...state,
                form_open:false
            }
        default:
            return state
    }
}