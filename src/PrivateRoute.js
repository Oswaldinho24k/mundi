import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {Spin, message} from 'antd';


const PrivateRoute = ({component: Component, user, fetched,  ...rest}) => {
    if(fetched){
        if (user === null ){
            message.warning('Debes iniciar sesión');
        }
    }
    return (
        <div>
            {fetched ?
                <Route {...rest} render={props => (
                    user !== null ?
                        (
                            <Component {...props} />
                        ) : (
                            <div>
                                <Redirect to={{
                                    pathname: '/login',
                                    state: {from: props.location}
                                }}/>
                            </div>
                        )

                )}/>
                :
                <Spin/>
            }
        </div>

    );
};
export default PrivateRoute;