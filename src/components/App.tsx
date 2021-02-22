import { gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./HomePage";
import Nav from "./Nav";
import ProtectedRoute from "./ProtectedRoute";
import { ProjectDTO } from "../DTO/ProjectDTO";
import Login from "./Login";
import ProjectList from "./Project/ProjectList";
import Register from "./Register";
import Profile from "./Profile";
import CreateProjectForm from "./Project/CreateProjectForm";
import ProjectDetail from "./Project/ProjectDetail";
import { ProjectProvider } from "../contexts/ProjectContext";
import EditProjectForm from "./Project/EditProjectForm";
import MyOrders from "./MyOrders";

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <div className="container max-w-screen-xl mx-auto">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/projects">
              <ProjectList />
            </Route>
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
              <CreateProjectForm />
            </ProtectedRoute>
            <Route path="/projects/detail/:projectId">
              <ProjectProvider>
                <ProjectDetail />
              </ProjectProvider>
            </Route>
            <ProtectedRoute isPrivate={true} path="/projects/edit/:projectId">
              <ProjectProvider>
                <EditProjectForm />
              </ProjectProvider>
            </ProtectedRoute>
            <Route path="/orders">
              <MyOrders />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
