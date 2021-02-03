import { gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FilterBar from "../components/FilterBar";
import { IndexPage } from "../components/IndexPage";
import Nav from "../components/Nav";
import { IProject } from "../types/IProject";
import Login from "./Login";
import ProjectList from "./project";

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
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <IndexPage projects={data.projects} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
