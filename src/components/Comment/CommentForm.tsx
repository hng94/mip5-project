import { gql, useMutation } from "@apollo/client";
import { Dispatch, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAuth from "../../contexts/AuthContext";
import useProject, { ProjectDetailParams } from "../../contexts/ProjectContext";
import { CommentDTO } from "../../DTO/CommentDTO";
import { ProjectActionTypes } from "../../reducers/ProjectReducer";

const CREATE_COMMENT = gql`
  mutation CreateComment($projectId: ID!, $content: String!) {
    createComment(data: { projectId: $projectId, content: $content }) {
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
`;

interface CommentFormProps {
  addComment: (comment: any) => void;
}

export default function CommentForm() {
  let { projectId } = useParams<ProjectDetailParams>();
  const { state: project, dispatch: dispatchProject } = useProject();
  const { state: auth, dispatch: dispatchAuth } = useAuth();
  const { register, errors, handleSubmit, reset } = useForm();
  const [sendComment, { loading, error, data }] = useMutation(CREATE_COMMENT, {
    onCompleted: (data) => {
      dispatchProject({
        type: ProjectActionTypes.ADD_COMMENT,
        payload: data.createComment,
      });
      reset({
        content: "",
      });
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    sendComment({
      variables: {
        content: data.content,
        projectId,
      },
    });
    data = {};
  };
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 glass dark:border-gray-800 p-4 rounded-xl border w-full">
        <div className="flex justify-between">
          <div className="flex items-center">
            <img
              className="h-11 w-11 rounded-full"
              src="https://pbs.twimg.com/profile_images/1287562748562309122/4RLk5A_U_x96.jpg"
            />
            <div className="ml-1.5 text-sm leading-tight">
              <span className="text-black dark:text-white font-bold block ">
                {auth.email}
              </span>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <input
            ref={register({ required: true })}
            className="bg-gray-100 my-2 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 placeholder-gray-500 focus:outline-none focus:bg-white"
            name="content"
            placeholder="Type Your Comment"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white uppercase py-2 px-6 shadow-lg rounded text-sm font-medium"
          >
            comment
          </button>
        </form>
      </div>
    </div>
  );
}
