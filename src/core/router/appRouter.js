import React from 'react'
import {Router,Route , Switch } from 'react-router-dom';
import LoginForm from '../../views/componets/login&signup/loginForm'
import Signup_Form from '../../views/componets/login&signup/signup_form'
import Addـbusiness from "../../views/componets/add_business/add_business"
import history from '../history/history'
 
const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={LoginForm} exact={true}/>
            <Route path="/signUp" component={Signup_Form} />
            <Route path="/add_business" component={Addـbusiness}  />
        </Switch>
    </Router>
    
)
 
export default AppRouter ;