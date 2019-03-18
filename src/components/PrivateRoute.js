import React from "react";
import { Route, Redirect } from "react-router-dom";
// Source: https://stackoverflow.com/questions/43520498/react-router-private-routes-redirect-not-working - 6
const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
