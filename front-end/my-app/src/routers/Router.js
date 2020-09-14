
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import  Chat  from "../component/pages/Chat";

import  {Login}  from "../component/pages/Login";
import { PrivateRoute } from "./PrivateRoute";


export const AppRouter = () => {

    return (
        <Router>

            <Switch>
                <Route exact path="/" component={Login} />

                <PrivateRoute
                        path="/" 
                        component={ Chat } 
                    />
                    
                
            </Switch>
            
        </Router>
    )
}
