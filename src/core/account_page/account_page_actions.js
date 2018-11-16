import account_page_api from '../api/account_page_api';
export const account_page_action_types = {
        GET_ACCOUNT_PAGE_SUCCESS:"GET_ACCOUNT_PAGE_SUCCESS"
}
export const get_account_info_success = (user,businesses,reserves) => {
    return{
        type:account_page_action_types.GET_ACCOUNT_PAGE_SUCCESS,
        user:user,
        businesses:businesses,
        reserves:reserves
        
    }
}

export const get_account_page = () => {
    return function(dispatch){
        return (account_page_api.get_account_page_info())
                                    .then((response) => {
                                        if(response){
                                            console.log('response from get_account_page',response)
                                            dispatch(get_account_info_success(response.user , response.businesses,response.reserves));
                                        }
                                        
                                    })
        
    }
}
