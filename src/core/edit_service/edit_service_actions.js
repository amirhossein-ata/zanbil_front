import edit_service_api from "../api/edit_service_api";
export const edit_service_action_types = {
    EDIT_SERVICE_SUCCESS: "EDIT_SERVICE_SUCCESS",
    GET_SERVICE_SUCCESS:"GET_SERVICE_SUCCESS"
}
export const edit_service_success = (service_id) => {
    return {
        type : edit_service_action_types.EDIT_SERVICE_SUCCESS,
        id : service_id,
        
    }
}

export const get_service_page_info_success = ({service,sanses}) => {
    console.log("reducer service is:",service)
    console.log("reducer sanses are:", sanses)
    return{
        type:edit_service_action_types.GET_SERVICE_SUCCESS,
        service:{
            id:service.id,
            name:service.name,
            fee:service.fee,
            
        },
        sanses:sanses

    }
}

export const edit_service = (description,fee,sanses,service_name,service_id,capacity,is_protected,old_password,new_password) => {
    console.log("FUUUUUUUUUUUU is///////////////////////////////////////////////:")
    console.log(service_name,description, fee,sanses,service_id,capacity,is_protected,old_password,new_password)
    return function(dispatch){
        return (edit_service_api.edit_service(description,fee,sanses,service_name,service_id,capacity,is_protected,old_password,new_password))
                                    .then((response) => {
                                        if(response){
                                            console.log('response from edit service',response)
                                            dispatch(edit_service_success(response));
                                        }
                                        
                                    })
        
    }
}

export const get_service_info  = (service_id) => {
    return function(dispatch){
        return (edit_service_api.get_service_info(service_id))
                                    .then((response) => {
                                        if(response){
                                            console.log('response from get_service_info',response)
                                            dispatch(get_service_page_info_success(response));
                                        }
                                        
                                    })
        
    }
}


