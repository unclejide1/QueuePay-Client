import React from 'react';
import {Route, Redirect} from "react-router-dom";

function Auth() {

        return false;
   
}

const ProtectedRoute = ({component: Component, ...rest}) => {
 
    return (
        <Route 
        {...rest}
        render={props => Auth() ? <Component {...props} /> :  <Redirect to="/signin" />
   
        }
        />
    )
}

export default ProtectedRoute
