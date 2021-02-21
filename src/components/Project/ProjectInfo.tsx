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
              {/* <p>832 backers</p> */}
            </div>
            {/* <div className="pt-1">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
                <div
                  style={{ width: "30%" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                ></div>
              </div>
            </div> */}
            <div className="flex flex-row space-x-2">
              <span className="text-2xl text-gray-500">Goal</span>
              <span className="text-2xl text-green-500">
                {project.fundingGoal} €
              </span>
              {/* <div className="text-gray-500">30%</div> */}
            </div>
          </div>
          <div className="space-x-4 py-4">
            {/* <button className="bg-red-400 text-white uppercase py-2 px-6 shadow-lg rounded text-sm font-medium">
              back it
            </button> */}
            <span>
              <FiThumbsUp
                onClick={() => likeProject()}
                className={`text-gray-500 cursor-pointer mb-1 mr-1 inline-flex hover:text-red-500 ${
                  liked ? "text-red-500" : ""
                }`}
              />
              <span>{likeCount} likes</span>
            </span>
            {/* <span>
              <span>{project.commentCount}</span>
              <FiMessageCircle className="text-blue-500 inline-block ml-2 mb-1" />
            </span> */}
          </div>
        </div>
      </div>
    </>
  );
}
