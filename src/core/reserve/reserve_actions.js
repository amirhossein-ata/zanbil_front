import reserve_sans_api from '../api/reserve_sans_api'

export const reserve_action_types = {
    RESERVE_SUCCESS : 'RESERVE_SUCCESS'
}

export const reserve_success = (response) => {
    return{
        type:reserve_action_types.RESERVE_SUCCESS,
        reserved_sans:response
    }
}

export const reserve_sans = (sansID,description,service_id,date,week_day,password) => {
    console.log("password in action is", password)
    return function(dispatch){
        return (reserve_sans_api.reserve_sans(sansID,description,service_id,date,week_day,password))
                                .then((response) => {
                                    if(response){
                                        console.log('response from reserve sans : ',response)
                                        dispatch(reserve_success(response))
                                    }
                                })
    }
}