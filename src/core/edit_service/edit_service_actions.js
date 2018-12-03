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

export const get_service_success = (sanses,fee,description) => {
    return {
        type:edit_service_action_type.GET_SERVICE_SUCCESS,
        sanses:sanses,
        // fee:fee,
        // description:description
    }

}

export const edit_service = (sanses,fee,description) => {
    
}

export const get_service  = (service_id) => {

}