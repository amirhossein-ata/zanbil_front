import Session_api from '../api/session_api'
import history from '../history/history'
export const session_action_types = {
    LOGIN_SUCCESS : 'LOGIN_SUCCESS',
    LOGIN_FAILURE : 'LOGIN_FAILUR',
    LOGOUT_SUCCESS : 'LOGOUT_SUCCESS'
}

export const login_success = () => {
    return {
        type : session_action_types.LOGIN_SUCCESS,
        logged_in:true
    }
}

export const logout_success = () => {
    return{
        type : session_action_types.LOGOUT_SUCCESS,
        logged_in : false
    }
}

export const login_failure = () => {
    return {
        type:session_action_types.LOGIN_FAILURE,
    }
}

export const signup = (credentials) => {
    return function(dispatch){
        return Session_api.signup(credentials)
                            .then((response) => {
                                if(response){
                                    console.log('response from signup : ',response)
                                    sessionStorage.setItem('token',response.jwt)
                                    dispatch(login_success())
                                }else{
                                    console.log('there was an error with signup')
                                    dispatch(login_failure())
                                }
                            })
    }
}

export const login = (credentials) => {
    return function(dispatch){
        return Session_api.login(credentials)
                            .then((response) => {
                                if(response){
                                    console.log('response from login : ',response.jwt)
                                    sessionStorage.setItem('token',response)
                                    dispatch(login_success())
                                }else{
                                    console.log('there was an error with login')
                                    dispatch(login_failure())
                                }
                            })
    }
}

export const logout = () => {
    return function(dispatch){
            sessionStorage.removeItem('token');
            dispatch(logout_success())
            history.push('/')
    }
}