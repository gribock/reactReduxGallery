import React from 'react';
import App from './components/App';
import Login from './components/Login';
import Redirect from './components/Redirect';
import { BrowserRouter, Route } from 'react-router-dom';

const Root = () => (
    <BrowserRouter>
        <div>
            <Route path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/redirect" component={Redirect} />
        </div>
    </BrowserRouter>
);

export default Root;