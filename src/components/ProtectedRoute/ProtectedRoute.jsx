import React from "react";
import { Route, useLocation, Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, user, rest }) => {
  const location = useLocation();
  return !user ? (
    <Navigate
      {...rest}
      to={{
        pathname: "/login",
        state: { prevPath: location.pathname },
      }}
      replace
    />
  ) : (
    <Component />
  );
};

export default ProtectedRoute;
