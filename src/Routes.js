import React from 'react';
import HomePage from './components/home/HomePage';
import {Switch, Route} from 'react-router-dom';
import LogIn from './components/users/LogIn';
import Register from './components/users/Registry';
import Landing from './components/steps/Landing';


const Routes = () => (
    <Switch>

        <Route path="/logIn" component={LogIn} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={HomePage} />
        <Route path="/reserva" component={Landing} />
    </Switch>
);

export default Routes;
