import Add_service_api from "../api/add_service_api";
export const add_service_action_type = {
    ADD_SERVICE_SUCCESS: "ADD_SERVICE_SUCCESS",
    SET_SERVICE_INFORMATION: "SET_SERVICE_INFORMATION"
}
export const add_service_success = (service_id) => {
    return {
        type : add_service_action_type.ADD_SERVICE_SUCCESS,
        id : service_id,
        
    }
}

export const add_service = (informations, days,business_id) => {
    return function(dispatch){
        return Add_service_api.add_service(informations, days,business_id)
                            .then((response) => {
                                if(response) {
                                    console.log('response from add service : ',response);
                                    dispatch((add_service_success(response.service.id)));
                                }
                            })
    }
}
export const set_service_information = (informations, days, business_id) => {
    return{
        type: add_service_action_type.SET_SERVICE_INFORMATION,
        service: {
            informations: informations,
            days: days,
            business_id: business_id
        }
    }
}