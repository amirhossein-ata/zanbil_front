import {edit_service_action_type} from './edit_service_actions'

const initialState = {
    service_id: undefined,
    sanses:[],
  }
  
  export const edit_service_reducer = (state = initialState , action) => {
      switch(action.type){
          case edit_service_action_type.EDIT_SERVICE_SUCCESS:
              return{
                  ...state,
                      service_id:action.id
              }
          case edit_service_action_type.GET_SERVICE_SUCCESS:
              return{
                  ...state,
                  sanses:action.sanses,
              }
          default:
              return state
      }
  }