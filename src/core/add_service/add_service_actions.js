import Add_service_api from "../api/add_service_api";
export const add_service_action_type = {
    ADD_SERVICE_SUCCESS: "ADD_SERVICE_SUCCESS"
}
export const add_service_success = (service_id) => {
    return {
        type : add_service_action_type.ADD_SERVICE_SUCCESS,
        id : service_id,
        
    }
}

export const add_service = (informations, days) => {
    return function(dispatch){
        return Add_service_api.add_service(informations, days)
                            .then((response) => {
                                if(response) {
                                    console.log('response from add service : ',response);
                                    dispatch((add_service_success(response.service.id)));
                                }
                            })
    }
}