import Edit_business_api from "../api/edit_business_api";
export const add_business_action_type = {
    EDIT_BUSINESS_SUCCESS: "EDIT_BUSINESS_SUCCESS"
}
export const edit_business_success = (business_id) => {
    return {
        type : add_business_action_type.EDIT_BUSINESS_SUCCESS,
        id : business_id,
        
    }
}

export const edit_business = (informations,business_id) => {
    return function(dispatch){
        return Edit_business_api.edit_business(informations,business_id)
                            .then((response) => {
                                if(response) {
                                    console.log('response from edit business : ',response);
                                    dispatch((edit_business_success(response.id)));
                                }
                            })
    }
}