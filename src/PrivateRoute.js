import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {Spin, message} from 'antd';


const PrivateRoute = ({component: Component, usuario, fetched, verified , ...rest}) => {
    if(verified){

        if (usuario === null ){

            message.warning('Debes iniciar sesión');
        }
    }

    return (
        <div>
            {verified ?
                <Route {...rest} render={props => (

                    usuario !== null  ?
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