import React from 'react';
import HomePage from './components/home/HomePage';
import {Switch, Route} from 'react-router-dom';
import LogIn from './components/users/LogIn';
import Register from './components/users/Registry';
import UserProfile from './components/users/ProfilePage';
import ExpoDetail from './components/exportaciones/ExpDetail';

const Routes = () => (
    <Switch>

        <Route path="/login" component={LogIn} />
        <Route path="/register" component={Register} />
        <Route path="/userprofile" component={UserProfile}/>
        <Route path="/exportaciones/:expId" component={ExpoDetail}/>
        <Route path="/" component={HomePage} />


    </Switch>
);

export default Routes;
