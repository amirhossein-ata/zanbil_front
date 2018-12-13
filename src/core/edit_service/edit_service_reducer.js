import {edit_service_action_types} from './edit_service_actions'

const initialState = {
    service:undefined,
    sanses:[],
    service_id:undefined
  }
  
export const edit_service_reducer = (state = initialState , action) => {
    switch(action.type){
          case edit_service_action_types.EDIT_SERVICE_SUCCESS:
              return{
                  ...state,
                      service_id:action.id
              }
          case edit_service_action_types.GET_SERVICE_SUCCESS:
              return{
                  ...state,
                  service:action.service,
                  sanses:[action.sanses]
              }
          default:
              return state
      }
  }