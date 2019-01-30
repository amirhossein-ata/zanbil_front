import cancellation_api from "../api/cancellation_api"

export const cancellation_action_types ={
    CANCELLATION_SUCCESS : "CANCELLATION_SUCCESS"
}

export const cancellation_success = (id) => {
    return {
        type: cancellation_action_types.CANCELLATION_SUCCESS,
        id : id
    }

}

export const cancel_reserve = (reserve_id) => {
    return function(dispatch){
        return (cancellation_api.cancel_reserve(reserve_id))
        .then((response) => {
            if(response){
                console.log('response from cancelling reserve',response)
                dispatch(cancellation_success(response));
            }
            
        })
    }
}