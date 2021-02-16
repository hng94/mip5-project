import React, { FC } from "react";
import { ProjectDTO } from "../DTO/ProjectDTO";
import ProjectCard from "./Project/ProjectCard";
import FilterBar from "./FilterBar";
import { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
interface IGetProjectsData {
  projects: ProjectDTO[];
}

interface IProjectInput {
  searchKey?: string;
  categoryId?: string;
}

const GET_PROJECTS = gql`
  query GetProjects($searchKey: String) {
    projects(data: { searchKey: $searchKey }) {
      id
      title
      likeCount
      commentCount
      creator {
        email
      }
    }
  }
`;

interface IndexPageProps {
  projects: ProjectDTO[];
}
export const IndexPage = () => {
  const { loading, data } = useQuery<IGetProjectsData, IProjectInput>(
    GET_PROJECTS,
    { variables: {} }
  );
  useEffect(() => {
    console.log(data);
  }, [data]);
  if (loading) return <p>Loading ...</p>;
  if (data && data.projects.length > 0) {
    return (
      <div>
        <div className="grid grid-cols-4 space-x-6">
          <FilterBar />
          <div className="col-span-3">
            <div className="grid grid-col sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.projects.map((value, index) => (
                <ProjectCard project={value} key={index} />
              ))}
            </div>
            <div className="mt-4 text-center text-white rounded bg-red-400 cursor-pointer px-3 py-2 transition duration-300 ease-in-out transform hover:shadow-lg hover:bg-red-500">
              Show more
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      to="/projects/create"
      className="focus:outline-none bg-blue-500 text-white uppercase py-2 px-6 shadow-lg rounded text-sm font-medium"
    >
      Create new project
    </Link>
  );
};
