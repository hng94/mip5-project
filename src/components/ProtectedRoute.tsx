import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../contexts/AuthContext";

export default function ProtectedRoute({ isPrivate, children, ...rest }) {
  debugger;
  let { state: auth, dispatch } = useAuth();
  const renderCondition = !!auth?.token == isPrivate;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        renderCondition ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
