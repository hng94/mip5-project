import React, { FC, useState } from "react";
import { ProjectDTO } from "../DTO/ProjectDTO";
import ProjectCard from "./Project/ProjectCard";
import FilterBar from "./FilterBar";
import { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
interface IGetProjectsData {
  projects: ProjectDTO[];
}

interface IProjectInput {
  searchKey?: string;
  categoryId?: string;
  take?: number;
  skip?: number;
}

const GET_PROJECTS = gql`
  query GetProjects($searchKey: String, $take: Float, $skip: Float) {
    projects(data: { searchKey: $searchKey, take: $take, skip: $skip }) {
      id
      title
      url
      subTitle
      likeCount
      commentCount
      category {
        name
      }
      creator {
        email
        firstName
        lastName
      }
      fundingGoal
      createdDate
    }
  }
`;

interface IndexPageProps {
  projects: ProjectDTO[];
}
export const HomePage = () => {
  const [currentPage, setPage] = useState(0);
  const { loading, data, refetch, fetchMore } = useQuery<
    IGetProjectsData,
    IProjectInput
  >(GET_PROJECTS, {
    variables: {},
  });
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    console.log(data);
    refetch({
      searchKey: searchQuery,
    });
  }, [data, searchQuery]);

  useEffect(() => {
    fetchMore({
      variables: {
        skip: currentPage,
        take: 1,
      },
    });
  }, [currentPage]);

  if (loading) return <p>Loading ...</p>;
  if (data) {
    return (
      <div>
        <div className="grid grid-cols-4 space-x-6">
          <div className="rounded-md flex flex-col space-y-2">
            <SearchInput value={searchQuery} setValue={setSearchQuery} />
          </div>
          <div className="col-span-3">
            {data.projects.length > 0 && (
              <>
                <div className="grid grid-col sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {data.projects.map((value, index) => (
                    <ProjectCard project={value} key={index} />
                  ))}
                </div>
                {/* <button
                  disabled={data.projects.length < 1}
                  onClick={() => setPage(currentPage + 1)}
                  className="disabled mt-4 text-center text-white rounded bg-red-400 cursor-pointer px-3 py-2 transition duration-300 ease-in-out transform hover:shadow-lg hover:bg-red-500"
                >
                  Show more
                </button> */}
              </>
            )}
            {data.projects.length == 0 && (
              <div>
                <pre className="mb-4 text-xl text-red-500">
                  There is not found any project
                </pre>
                <Link
                  to="/projects/create"
                  className="focus:outline-none bg-blue-500 text-white uppercase py-2 px-6 shadow-lg rounded text-sm font-medium"
                >
                  Create new project
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
};
