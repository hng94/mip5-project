import { gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IndexPage } from "./IndexPage";
import Nav from "./Nav";
import ProtectedRoute from "./ProtectedRoute";
import { ProjectDTO } from "../DTO/ProjectDTO";
import Login from "./Login";
import ProjectList from "./Project/ProjectList";
import Register from "./Register";
import Profile from "./Profile";
import ProjectForm from "./Project/ProjectForm";

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <div className="container max-w-screen-xl mx-auto">
          <Switch>
            <Route exact path="/">
              <IndexPage />
            </Route>
            <ProtectedRoute isPrivate={true} exact path="/projects">
              <ProjectList />
            </ProtectedRoute>
            <ProtectedRoute isPrivate={false} path="/login">
              <Login />
            </ProtectedRoute>
            <ProtectedRoute isPrivate={false} path="/register">
              <Register />
            </ProtectedRoute>
            <ProtectedRoute isPrivate={true} path="/profile">
              <Profile />
            </ProtectedRoute>
            <ProtectedRoute isPrivate={true} path="/projects/create">
              <ProjectForm />
            </ProtectedRoute>
          </Switch>
        </div>
      </Router>
    </>
  );
}
