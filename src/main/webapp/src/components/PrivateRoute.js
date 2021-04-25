import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            localStorage.getItem("authenticated") ? <Component {...props} /> : <Redirect to="/login" /> //JAVÍTANI
        )} />
    );
};

export default PrivateRoute;