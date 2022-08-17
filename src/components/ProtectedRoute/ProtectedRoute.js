import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ loggedIn, children}) => {
  return (
    <Route>
      {
      () => loggedIn ? {children} : <Redirect to="/signin" />
      }
    </Route>
  )
}

export default ProtectedRoute;

