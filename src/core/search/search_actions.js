import Search_api from '../api/search_api'

export const search_action_types={
    SEND_SEARCH_FILTERS_SUCCESS :'SEND_SEARCH_FILTERS_SUCCESS',
    OPEN_SEARCH_FORM :'OPEN_SEARCH_FORM',
    CLOSE_SEARCH_FORM:'CLOSE_SEARCH_FORM'
}

export const open_search_form = () => {
    return{
        type:search_action_types.OPEN_SEARCH_FORM
    }
}

export const close_search_form = () => {
    return{
        type:search_action_types.CLOSE_SEARCH_FORM
    }
}

export const send_search_filters_success = (search_result)=>{
    return{
        type:search_action_types.SEND_SEARCH_FILTERS_SUCCESS,
        search_results:search_result
    }
}

export const send_search_filters = (search_filters) => {
    return function(dispatch){
        return Search_api.send_search_filters(search_filters)
                            .then((response) => {
                                if(response) {
                                    console.log('response from send search filters : ' ,response)
                                    dispatch(send_search_filters_success(response))
                                }
                            })
    }
}