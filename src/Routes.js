import React from 'react';
import HomePage from './components/home/HomePage';
import { Switch, Route } from 'react-router-dom';
import LogIn from './components/users/LogIn';
import Register from './components/users/Registry';
import UserProfile from './components/users/ProfilePage';
import ExpoDetail from './components/exportaciones/ExpDetail';
import Selector from './components/home/Selector';
import Fader from './components/Fader';


const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
};

const Routes = ({location}) => (

    

   
      <Fader>
       <Switch key={location.pathname} pathname={location.pathname}>  
       <Route
             exact
              path="/"
              component={HomePage}
            />
        <Route
              path="/login"
              component={LogIn}
            />
        <Route
              path="/reserva"
              component={Selector}
            />
        </Switch>

      </Fader>


);

//        <Route path="/login" component={LogIn} />
//        <Route path="/register" component={Register} />
//        <Route path="/userprofile" component={UserProfile}/>
//        <Route path="/exportaciones/:expId" component={ExpoDetail}/>
//        <Route path="/reserva" component={Selector} />
//        <Route exact path="/" component={HomePage} />

export default Routes;
