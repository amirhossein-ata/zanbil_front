import Session_api from '../api/session_api'
export const login_action_types = {
    LOGIN_SUCCESS : 'LOGIN_SUCCESS',
    LOGIN_FAILURE : 'LOGIN_FAILUR',
    LOGOUT_SUCCESS : 'LOGOUT_SUCCESS'
}

export const login_success = () => {
    return {
        type : login_action_types.LOGIN_SUCCESS,
        logged_in:true
    }
}

export const logout_success = () => {
    return{
        type : login_action_types.LOGOUT_SUCCESS,
        logged_in : false
    }
}

export const login_failure = () => {
    return {
        type:login_action_types.LOGIN_FAILURE,
    }
}

export const login = (credentials) => {
    return function(dispatch){
        return Session_api.login(credentials)
                            .then((response) => {
                                if(response){
                                    console.log('response from login : ',response)
                                    sessionStorage.setItem('token',response.jwt)
                                    dispatch(login_success())
                                }else{
                                    console.log('there was an error with login')
                                    dispatch(login_failure())
                                }
                            })
    }
}