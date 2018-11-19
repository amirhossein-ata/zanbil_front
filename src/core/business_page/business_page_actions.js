import business_page_api from '../api/business_page_api'
export const business_page_action_types = {
    GET_SERVICES_SUCCESS : 'GET_SERVICES_SUCCESS'
}

export const get_business_info_success = ({id,owner_id,name,address,category_id,description,email,phone_number},services) => {
    return{
        type:business_page_action_types.GET_SERVICES_SUCCESS,
        business_info:{
            id:id,
            owner_id:owner_id,
            name:name,
            address:address,
            category_id:category_id,
            description:description,
            email:email,
            phone_number:phone_number
        },
        services : services
    }
}

export const get_business_info = (business_id) => {
    return function(dispatch){
        return business_page_api.get_business_info(business_id)
                                    .then((response) => {
                                        if(response){
                                            console.log('response from get_business_page',response)
                                            dispatch(get_business_info_success(response , response.services));
                                        }
                                        
                                    })
    }
}