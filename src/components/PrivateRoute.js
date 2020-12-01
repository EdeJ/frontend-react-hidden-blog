import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useAuthentication } from '../hooks/authentication'
import { Login } from '../pages/Login';

export const PrivateRoute = ({ children, ...rest }) => {

    let auth = useAuthentication();

    console.log(auth);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.isAuthenticated ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    )
}

