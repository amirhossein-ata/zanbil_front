import edit_service_api from "../api/edit_service_api";
export const edit_service_action_type = {
    EDIT_SERVICE_SUCCESS: "EDIT_SERVICE_SUCCESS",
    GET_SERVICE_SUCCESS:"GET_SERVICE_SUCCESS"
}
export const edit_service_success = (service_id) => {
    return {
        type : edit_service_action_type.EDIT_SERVICE_SUCCESS,
        id : service_id,
        
    }
}

export const get_service_success = (sanses,fee,description,service_name) => {
    return {
        type:edit_service_action_type.GET_SERVICE_SUCCESS,
        sanses:sanses,
        service_name:service_name,
        fee:fee,
        description:description
    }

}

export const edit_service = (sanses,fee,description,service_name) => {
    return function(dispatch){
        return (edit_service_api.edit_service(description,fee,sanses,service_name))
                                    .then((response) => {
                                        if(response){
                                            console.log('response from get_account_page',response)
                                            dispatch(edit_service_success(response));
                                        }
                                        
                                    })
        
    }
}

export const get_service  = (service_id) => {
    return function(dispatch){
        return (edit_service_api.edit_service(service_id))
                                    .then((response) => {
                                        if(response){
                                            console.log('response from get_account_page',response)
                                            dispatch(edit_service_success(response));
                                        }
                                        
                                    })
        
    }
}