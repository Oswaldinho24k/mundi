import React from 'react';
import HomePage from './components/home/HomePage';
import { Switch, Route } from 'react-router-dom';
import LogIn from './components/users/LogIn';
import Register from './components/users/Registry';
import UserProfile from './components/users/ProfilePage';
import ExpoDetail from './components/exportaciones/ExpDetail';
import Selector from './components/home/Selector';
import Fader from './components/Fader';
import Landing from './components/landing/Landing';
import PayPage from './components/pay/PayPage';

import { RouteTransition } from 'react-router-transition';



const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
};

const Routes = ({location}) => (


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
        <Route 
                path="/register" 
                component={Register} 
            />
         
         <Route 
             path="/userprofile"
             component={UserProfile}
            />
            
        <Route 
                path="/exportaciones/:expId"     component={ExpoDetail}
            />

        <Route
                path="/landing" 
                component={Landing}
            />

           <Route
               path="/pay/:searchId"
               component={PayPage}
           />
         
        </Switch>



   



);

const styles = {
    translateX: 200
}
//        <Route path="/login" component={LogIn} />
//        <Route path="/register" component={Register} />
//        <Route path="/userprofile" component={UserProfile}/>
//        <Route path="/exportaciones/:expId" component={ExpoDetail}/>
//        <Route path="/reserva" component={Selector} />
//        <Route exact path="/" component={HomePage} />



//      <Fader>
//       <Switch key={location.pathname} pathname={location.pathname}>  
//       <Route
//             exact
//              path="/"
//              component={HomePage}
//            />
//        <Route
//              path="/login"
//              component={LogIn}
//            />
//        <Route
//              path="/reserva"
//              component={Selector}
//            />
//        </Switch>
//
//      </Fader>



//    <RouteTransition
//        pathname={location.pathname}
//        atEnter={{ translateX: 100 }}
//        atLeave={{ translateX: -100 }}
//        atActive={{ translateX: 0 }}
//        mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}  
//    >
//       <Switch key={location.key} location={location}>
//          <Route exact path="/" component={HomePage}/>
//          <Route path="/login" component={LogIn}/>
//          <Route path="/reserva" component={Selector}/>
//           
//       </Switch>
//        
//    </RouteTransition>

export default Routes;
