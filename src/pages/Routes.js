import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Form from './Form';
import Home from './Home';

function Routes() {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Form} path="/cadastro" />
        </BrowserRouter>
    )
}

export default Routes;