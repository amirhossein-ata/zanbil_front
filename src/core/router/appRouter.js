import React from 'react'
import {Router,Route , Switch } from 'react-router-dom';
import LoginForm from '../../views/componets/login&signup/loginForm'
import Signup_Form from '../../views/componets/login&signup/signup_form'
import Add_service from "../../views/componets/add_service/add_service_form";
import Addـbusiness from "../../views/componets/add_business/add_business"
import history from '../history/history'
import MainPage from '../../views/pages/main_page'
import Category_page from '../../views/pages/category_page'

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={MainPage} exact={true}/>
            <Route path="/signUp" component={Signup_Form} />
            <Route path="/login" component={LoginForm}/>
            <Route path="/add_service" component={Add_service} />
            <Route path="/add_business" component={Addـbusiness}  />
            <Route path="/category_page" component={Category_page} />
        </Switch>
    </Router>
    
)
 
export default AppRouter ;