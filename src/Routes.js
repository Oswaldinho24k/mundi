import React from 'react';
import HomePage from './components/home/HomePage';
import {Switch, Route} from 'react-router-dom';
import LogIn from './components/users/LogIn';
import Register from './components/users/Registry';

const Routes = () => (
    <Switch>

        <Route path="/logIn" component={LogIn} />
        <Route path="/register" component={Register} />
        <Route path="/" component={HomePage} />
    </Switch>
);

export default Routes;
