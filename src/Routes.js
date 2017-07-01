import React from 'react';
import HomePage from './components/home/HomePage';
import {Switch, Route} from 'react-router-dom';

const Routes = () => (
    <Switch>
        <Route path="/" component={HomePage} />
    </Switch>
);

export default Routes;