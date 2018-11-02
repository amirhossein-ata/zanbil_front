import Add_business_api from "../api/add_business_api";
export const add_business_action_type = {
    ADD_BUSINESS_SUCCESS: "ADD_BUSINESS_SUCCESS"
}
export const add_business_success = (business_id) => {
    return {
        type : add_business_action_type.ADD_BUSINESS_SUCCESS,
        id : business_id,
        
    }
}

export const add_business = (informations) => {
    return function(dispatch){
        return Add_business_api.add_business(informations)
                            .then((response) => {
                                if(response) {
                                    console.log('response from add business : ',response);
                                    dispatch((add_business_success(response.id)));
                                }
                            })
    }
}