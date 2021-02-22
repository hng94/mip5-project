import { gql, useQuery } from "@apollo/client";
import {
  FC,
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
  useState,
} from "react";
import { createContext, Dispatch } from "react";
import { useParams } from "react-router-dom";
import { ProjectDTO } from "../DTO/ProjectDTO";
import {
  ProjectAction,
  ProjectActionTypes,
  ProjectReducer,
} from "../reducers/ProjectReducer";
export interface ProjectDetailParams {
  projectId: string;
}

export interface IGetProjectData {
  project: ProjectDTO;
}

interface IProjectInput {
  id?: string;
}

export const GET_PROJECT = gql`
  query GetProject($id: String!) {
    project(id: $id) {
      id
      title
      url
      subTitle
      story
      category {
        id
        name
      }
      creator {
        firstName
        lastName
        email
      }
      fundingGoal
      currentFund
      createdDate
      deletedDate
      likeCount
      likes {
        creator {
          id
        }
      }
      products {
        url
        title
        price
        id
        description
        orders {
          id
          quantity
        }
      }
      timelines {
        content
        createdDate
      }
      commentCount
      comments {
        id
        content
        likeCount
        createdDate
        creator {
          id
          firstName
          lastName
          email
        }
        likes {
          creator {
            id
          }
        }
      }
    }
  }
`;
interface IProjectContext {
  state: ProjectDTO | null;
  dispatch: Dispatch<ProjectAction>;
}

export const ProjectContext = createContext<IProjectContext>({
  state: null,
  dispatch: () => {},
});

export const ProjectProvider: FC = ({ children }) => {
  let { projectId } = useParams<ProjectDetailParams>();
  const [state, dispatch] = useReducer(ProjectReducer, null);

  const { loading, data, refetch } = useQuery<IGetProjectData, IProjectInput>(
    GET_PROJECT,
    {
      variables: { id: projectId },
      onCompleted: (data) => {
        dispatch({
          payload: data.project,
          type: ProjectActionTypes.LOAD_PROJECT,
        });
      },
    }
  );
  useLayoutEffect(() => {
    if (data) {
      dispatch({
        payload: data.project,
        type: ProjectActionTypes.LOAD_PROJECT,
      });
    }
  }, []);
  return (
    <ProjectContext.Provider value={{ state, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default function useProject() {
  return useContext(ProjectContext);
}
