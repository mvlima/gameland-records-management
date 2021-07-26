import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './view/Home';
import Login from './view/Login';
import SignUp from './view/SignUp';
import AddProduct from './view/AddProduct';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/signUp' component={SignUp} />
                <Route path='/addProducts' component={AddProduct} />
            </Switch>
        </BrowserRouter>
    )
}