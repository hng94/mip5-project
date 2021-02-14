import { gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IndexPage } from "./IndexPage";
import Nav from "./Nav";
import ProtectedRoute from "./ProtectedRoute";
import { IProject } from "../types/IProject";
import Login from "./Login";
import ProjectList from "./Project/ProjectList";
import Register from "./Register";
import Profile from "./Profile";
import ProjectForm from "./Project/ProjectForm";

interface IGetProjectsData {
  projects: IProject[];
}

interface IProjectInput {
  searchKey?: string;
  categoryId?: string;
}

const GET_PROJECTS = gql`
  query GetProjects($searchKey: String) {
    projects(data: { searchKey: $searchKey }) {
      id
      name
      createdDate
    }
  }
`;

export default function App() {
  const { loading, data } = useQuery<IGetProjectsData, IProjectInput>(
    GET_PROJECTS,
    { variables: {} }
  );
  useEffect(() => {
    console.log(data);
  }, [data]);
  if (loading) return <p>Loading ...</p>;
  return (
    <>
      <Router>
        <Nav />
        <div className="container max-w-screen-xl mx-auto">
          <Switch>
            <ProtectedRoute isPrivate={true} path="/projects">
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
            <ProtectedRoute isPrivate={true} path="/project/create">
              <ProjectForm />
            </ProtectedRoute>
            <Route exact path="/">
              <IndexPage projects={data.projects} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
