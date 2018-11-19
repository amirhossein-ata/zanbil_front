import {account_page_action_types} from "./account_page_actions"

const initialState = {
    reserves:[],
    user:undefined,
    businesses:[]

}

export const account_page_reducer = (state=initialState ,action) => {
    console.log(action)
    switch(action.type){
        case account_page_action_types.GET_ACCOUNT_PAGE_SUCCESS:
            console.log("FUCCCCCCCCCCCCCKKKKK")
            return {
                ...state,
                    user:action.user,
                    reserves:action.reserves,
                    businesses:action.businesses
                    
            }
        default :
            return state
    }   
}