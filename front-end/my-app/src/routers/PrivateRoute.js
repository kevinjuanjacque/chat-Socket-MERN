import React, { useContext } from 'react';

import { Route, Redirect } from 'react-router-dom';
import { userContext } from '../hooks/userContext';


export const PrivateRoute = (
    {component: Component,}
) => {
    
    const {user} = useContext(userContext);
    return (
        <Route 
            component={ (props) => (
                ( user==='' )
                ? (<Redirect to="/" />  )
                :( <Component {...props}/> )
            )}
        
        />
    )
}
