import {active_panel_action_types} from './active_panel_actions'

const initialState = {
    active_panel : 'landing_page'
}
export const active_panel_reducer = (state=initialState ,action) => {

    switch(action.type){
        case(active_panel_action_types.CHANGE_ACTIVE_PANEL_SUCCESS):{
            return{
                ...state,
                active_panel: action.panel
            }
        }
        default:
            return state        
    }
}
