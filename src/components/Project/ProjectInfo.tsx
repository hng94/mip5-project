import * as React from "react";
import Carousel from "../common/Carousel";
import { FiHeart, FiClock, FiThumbsUp, FiMessageCircle } from "react-icons/fi";
import { ProjectDTO } from "../../DTO/ProjectDTO";
import { gql, useMutation } from "@apollo/client";
import useAuth from "../../contexts/AuthContext";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useProject, { ProjectDetailParams } from "../../contexts/ProjectContext";
import { ProjectActionTypes } from "../../reducers/ProjectReducer";
import DefaultAvatar from "../common/Avatar";
interface ProjectInfoProps {
  project: ProjectDTO;
}

const LIKE_PROJECT = gql`
  mutation likeProject($projectId: ID!) {
    likeProject(data: { projectId: $projectId }) {
      likeCount
      likes {
        creator {
          id
        }
      }
    }
  }
`;

export default function ProjectInfo() {
  let { projectId } = useParams<ProjectDetailParams>();
  const { state: project, dispatch: dispatchProject } = useProject();
  const { state: auth, dispatch } = useAuth();
  let isLiked =
    project?.likes?.map((like) => like?.creator?.id).indexOf(auth?.id) != -1 ||
    false;
  const [liked, setLiked] = useState(isLiked);
  const [likeCount, setLikeCount] = useState(project.likeCount);
  const [likeProject, { loading, data }] = useMutation(LIKE_PROJECT, {
    variables: {
      projectId,
    },
    onCompleted: ({ likeProject }) => {
      setLiked(
        likeProject.likes?.map((like) => like.creator.id).indexOf(auth?.id) !=
          -1 || false
      );
      setLikeCount(likeProject.likeCount);
    },
  });
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {/* <Carousel /> */}
        <img
          style={{ height: "300px" }}
          src={project.url}
          alt={project.title}
        />
        <div className="space-y-2 rounded bg-white border-gray-400 p-6">
          <div id="article">
            <div>
              <div className="text-red-400">{project.category.name}</div>
              <span className="text-2xl font-semibold">{project.title}</span>
              {project.deletedDate != null && (
                <span className="ml-2 text-2xl text-red-500 font-bold">
                  [CLOSED]
                </span>
              )}
            </div>
            <div className="font-normal text-md text-gray-700" id="content">
              {project.subTitle}
            </div>
          </div>
          <div className="flex flex-row py-2">
            <DefaultAvatar />
            <div className="px-2">
              <p className="text-sm font-regular">
                {project.creator.firstName + " " + project.creator.lastName}
              </p>
              <p className="text-sm font-light mb-1">{project.creator.email}</p>
            </div>
          </div>
          <hr />
          <div>
            <div className="flex flex-row">
              <span className="text-md space-x-2 text-red-400 mr-2">
                <FiClock className="inline-flex mb-1" />
                <span>
                  {new Date(project.createdDate).toLocaleDateString()}
                </span>
              </span>
            </div>
            <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200 my-2">
              <div
                style={{
                  width: `${
                    (project.currentFund * 100) / project.fundingGoal
                  }%`,
                }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
              ></div>
            </div>
            <div className="space-y-1">
              <p className="text-4xl text-green-700">{project.currentFund} €</p>
              <p className="text-gray-500">
                pledged of €{project.fundingGoal} goal
              </p>
            </div>
          </div>
          <div className="space-x-4 py-4">
            <span aria-disabled={project.deletedDate != null}>
              <FiThumbsUp
                onClick={() => likeProject()}
                className={`text-gray-500 cursor-pointer mb-1 mr-1 inline-flex hover:text-red-500 ${
                  liked ? "text-red-500" : ""
                }`}
              />
              <span>{likeCount} likes</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
