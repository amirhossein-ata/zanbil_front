import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import configureStore from './core/store/configureStore'
import AppRouter from './core/router/appRouter'
import 'semantic-ui-css/semantic.min.css'
import './views/styles/styles.scss'
const store = configureStore()
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));
