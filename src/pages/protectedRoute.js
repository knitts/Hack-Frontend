import React from "react";
import { Route, Redirect } from "react-router-dom";
import web3 from "../web3";
let ProtectedRoute =({ children, ...rest }) =>{
  let check =0;
  if(localStorage.getItem('addresses')){
      check=1;
  }
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        check? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/Login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
export default ProtectedRoute;