import { gql, useMutation, useQuery } from "@apollo/client";
import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../contexts/AuthContext";
import { ProjectDTO } from "../../DTO/ProjectDTO";

const GET_MY_PROJECTS = gql`
  query projects($creatorId: String!) {
    projects(data: { creatorId: $creatorId }) {
      id
      title
      createdDate
      category {
        name
      }
      fundingGoal
    }
  }
`;

const REMOVE_PROJECT = gql`
  mutation removeProject($id: String!) {
    removeProject(id: $id)
  }
`;

interface RenderProjectItemProps {
  project: ProjectDTO;
  onRemove: () => void;
}

const RenderProjectItem = ({ project, onRemove }: RenderProjectItemProps) => {
  return (
    <tr key={project.id}>
      <td className="px-6 py-4 whitespace-nowrap">
        <Link
          className="text-sm font-medium text-blue-500 hover:underline"
          to={`/projects/detail/${project.id}`}
        >
          {project.title}
        </Link>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <p className="text-sm text-gray-900">{project.category.name}</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="uppercase px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {project.fundingGoal}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {new Date(project.createdDate).toLocaleDateString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Link
          to={`/projects/detail/${project.id}`}
          className="text-gray-500 p-2"
        >
          Detail
        </Link>
        <Link to={`/projects/edit/${project.id}`} className="text-blue-500 p-2">
          Edit
        </Link>
        <button onClick={onRemove} className="text-red-500 p-2">
          Remove
        </button>
      </td>
    </tr>
  );
};

interface IGetProjects {
  projects: ProjectDTO[];
}
export default function ProjectList() {
  const { state, dispatch } = useAuth();
  const [myProjects, setMyProjects] = useState<ProjectDTO[]>(null);
  const { loading, data } = useQuery<IGetProjects>(GET_MY_PROJECTS, {
    variables: {
      creatorId: state.id,
    },
  });
  const [removeProject, { data: removedId, error: removeError }] = useMutation(
    REMOVE_PROJECT,
    {
      onCompleted: ({ removeProject }) => {
        const updatedMyProjects = myProjects.filter(
          (p) => p.id !== removeProject
        );
        setMyProjects([...updatedMyProjects]);
      },
    }
  );
  useEffect(() => {
    if (data && data.projects) {
      setMyProjects([...data.projects]);
    }
  }, [data]);
  if (loading) <pre className="text-red-500">Loading</pre>;
  if (myProjects)
    return (
      <>
        <div className="py-4 flex flex-row justify-between">
          <p className="text-3xl uppercase">My projects</p>
          <Link to="/projects/create">
            <button className="focus:outline-none bg-blue-500 text-white uppercase py-2 px-6 shadow-lg rounded text-sm font-medium">
              New
            </button>
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 sm:rounded-lg shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Funding goal
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Created data
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {myProjects.map((project) => (
                      <RenderProjectItem
                        key={project.id}
                        project={project}
                        onRemove={() => {
                          removeProject({
                            variables: {
                              id: project.id,
                            },
                          });
                        }}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );

  return null;
}
