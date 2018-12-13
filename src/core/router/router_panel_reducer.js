import {router_panel_actions} from './router_panel_actions'



export const router_panel_reducer = (
    state=[{text:'خانه',value:'landing_page'}],
    action
    ) => {

    switch(action.type){

        case router_panel_actions.PUSH_TO_ROUTER:
            return [
                ...state,
                action.page
            ]

        case router_panel_actions.GO_BACK:
            const len = state.length
            if (len === 1){
                return state
            } 
            return [
                ...state.slice(0,len-1)
            ]

        case router_panel_actions.SELECT_PAGE:
            let index = state.indexOf(action.page)
            if (index === -1){
                return [...state,action.page]
            }
            return state.slice(0,index+1)
        
        case router_panel_actions.NEW_ROUTE:
            return [...state.slice(0,1),action.page]
            
        default :
            return state
    }
}