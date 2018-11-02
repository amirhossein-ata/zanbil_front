import business_page_api from '../api/business_page_api'
export const business_page_action_types = {
    GET_SERVICES_SUCCESS : 'GET_SERVICES_SUCCESS'
}

export const get_services_success = (services) => {
    return{
        type:business_page_action_types.GET_SERVICES_SUCCESS,
        services : services
    }
}

export const get_services = () => {
    console.log('hello')
    return function(dispatch){
        console.log('bye')
        return business_page_api.get_business_services()
                                    .then((response) => {
                                        if(response){
                                            console.log('response from get_business_page',response)
                                            dispatch(get_services_success(response));
                                        }
                                        
                                    })
    }
}