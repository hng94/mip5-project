import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getLocalStorageValue } from "../common";
import useAuth from "../contexts/AuthContext";

export default function ProtectedRoute({ isPrivate, children, ...rest }) {
  // let { state: auth, dispatch } = useAuth();
  const auth = getLocalStorageValue("auth");
  const renderCondition = !!auth?.token == isPrivate;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        renderCondition ? children : <Redirect to="/" />
      }
    />
  );
}
