import React from 'react'
import {Router,Route , Switch } from 'react-router-dom';
import LoginForm from '../../views/componets/login&signup/loginForm'
import Addـbusiness from "../../views/componets/add_business/add_business"
import history from '../history/history'

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={LoginForm} exact={true}/>
            <Route path="/add_business" component={Addـbusiness} exact={true} />
        </Switch>
    </Router>
    
)

export default AppRouter ;