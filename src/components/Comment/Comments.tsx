import React, { useEffect, useState } from "react";
import { FiMessageCircle } from "react-icons/fi";
import useAuth from "../../contexts/AuthContext";
import useProject from "../../contexts/ProjectContext";
import { CommentDTO } from "../../DTO/CommentDTO";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

interface CommentsProps {
  comments: CommentDTO[];
}

function sortByCreatedDate(a: CommentDTO, b: CommentDTO) {
  if (a.createdDate < b.createdDate) {
    return 1;
  }
  if (a.createdDate > b.createdDate) {
    return -1;
  }
  return 0;
}

export default function Comments() {
  const { state: auth, dispatch } = useAuth();
  const {
    state: { comments },
    dispatch: dispatchProject,
  } = useProject();
  const [state, setState] = useState(comments.sort(sortByCreatedDate));
  useEffect(() => {
    setState(comments.sort(sortByCreatedDate));
  }, [comments]);
  if (!auth?.token) {
    return <pre className="text-red-500">Login to comment</pre>;
  }
  return (
    <>
      <div className="space-y-6">
        <div>
          <FiMessageCircle className="text-blue-500 inline-block mr-2 mb-1" />
          <span>{state.length} comments</span>
        </div>
        <CommentForm />
        {state.map((comment, index) => (
          <CommentCard comment={comment} key={comment.id} />
        ))}
      </div>
    </>
  );
}
