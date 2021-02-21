import { gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { FiHeart, FiThumbsUp } from "react-icons/fi";
import useAuth from "../../contexts/AuthContext";
import { CommentDTO } from "../../DTO/CommentDTO";

interface CommentCardProps {
  comment: CommentDTO;
}
const LIKE_COMMENT = gql`
  mutation likeComment($commentId: ID!) {
    likeComment(data: { commentId: $commentId }) {
      likes {
        creator {
          id
        }
      }
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
    }
  }
`;
export default function CommentCard({ comment }: CommentCardProps) {
  const [state, setState] = useState(comment);
  const { state: auth, dispatch } = useAuth();
  let isLiked =
    state.likes?.map((like) => like.creator.id).indexOf(auth?.id) != -1 ||
    false;
  const [liked, setLiked] = useState(isLiked);

  useEffect(() => {
    setLiked(isLiked);
  }, [state]);

  const [sendLike, { loading, data }] = useMutation(LIKE_COMMENT, {
    variables: {
      commentId: state.id,
    },
    onCompleted: (data) => {
      setState({ ...data.likeComment });
    },
  });

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 dark:border-gray-800 p-4 rounded-lg border w-full">
          <div className="flex justify-between">
            <div className="flex items-center">
              <img
                className="h-11 w-11 rounded-full"
                src="https://pbs.twimg.com/profile_images/1287562748562309122/4RLk5A_U_x96.jpg"
              />
              <div className="ml-1.5 text-sm leading-tight">
                <span className="text-black dark:text-white font-bold block ">
                  {state.creator.firstName + " " + state.creator.lastName}
                </span>
                <span className="text-gray-500 dark:text-gray-400 font-normal block">
                  @{state.creator.email}
                </span>
              </div>
            </div>
          </div>
          <p className="text-black dark:text-white block text-xl leading-snug mt-3">
            {state.content}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">
            {new Date(state.createdDate).toDateString()}
          </p>
          <div className="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>
          <div className="text-gray-500 dark:text-gray-400 flex mt-3">
            <div className="flex items-center mr-6">
              <FiThumbsUp
                onClick={() => sendLike()}
                className={`text-gray-500 inline-flex cursor-pointer hover:text-red-500 ${
                  liked ? "text-red-500" : ""
                }`}
              />
              <span className="ml-3">{state.likeCount} likes</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
