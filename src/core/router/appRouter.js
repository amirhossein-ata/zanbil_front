import React from 'react'
import {Router,Route , Switch } from 'react-router-dom';
import LoginForm from '../../views/componets/login&signup/loginForm'
import Signup_Form from '../../views/componets/login&signup/signup_form'
import Addـbusiness from "../../views/componets/add_business/add_business"
import history from '../history/history'
import MainPage from '../../views/pages/main_page'

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={MainPage} exact={true}/>
            <Route path="/signUp" component={Signup_Form} />
            <Route path="/login" component={LoginForm}/>
            <Route path="/add_business" component={Addـbusiness}  />
        </Switch>
    </Router>
    
)
 
export default AppRouter ;