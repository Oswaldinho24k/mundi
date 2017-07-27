import React from 'react';
//import ReactCSSTransitionGroup from 'react-transition-group/ReactCSSTransitionGroup';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6


const Fader = ({children}) => (
        <ReactCSSTransitionGroup
          transitionName="trans"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1}>
          {children}
        </ReactCSSTransitionGroup>
    );

export default Fader;