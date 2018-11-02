import category_page_api from '../api/category_page_api'
export const category_page_action_types={
    GET_CATEGORY_BUSINESSES_SUCCESS:'GET_CATEGORY_BUSINESSES_SUCCESS'
}

export const get_category_businesses_success = (businesses) => {
    return{
        type:category_page_action_types.GET_CATEGORY_BUSINESSES_SUCCESS,
        businesses:businesses
    }
}

export const get_category_businesses = (category_id) => {
    console.log('iam fucking calling ' , category_id)
    return function(dispatch){
        console.log('hey bitch i reached here')
        return category_page_api.get_category_businesses(category_id)
                                    .then((response) => {
                                        if(response){
                                            console.log('response from get_business_page',response)
                                            dispatch(get_category_businesses_success(response));
                                        }
                                        
                                    })
    }
}