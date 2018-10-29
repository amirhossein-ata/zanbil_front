import React from 'react'
import {Router,Route , Switch } from 'react-router-dom';
import LoginForm from '../../views/componets/login&signup/loginForm'
import history from '../history/history'
import MainPage from '../../views/pages/main_page'

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={MainPage} exact={true}/>
        </Switch>
    </Router>
    
)

export default AppRouter ;