import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children}) => {
  const loggedIn = localStorage.getItem('loggedIn');
  return (
    <Route>
      {
      () => loggedIn ? children : <Redirect to="/" />
      }
    </Route>
  )
}

export default ProtectedRoute;

