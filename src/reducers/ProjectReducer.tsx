import { CommentDTO } from "../DTO/CommentDTO";
import { LikeDTO } from "../DTO/LikeDTO";
import { OrderDTO } from "../DTO/OrderDTO";
import { ProjectDTO } from "../DTO/ProjectDTO";
import { TimelineDTO } from "../DTO/TimelineDTO";

export enum ProjectActionTypes {
  ADD_COMMENT = "ADD_COMMENT",
  LIKE_COMMENT = "LIKE_COMMENT",
  LIKE_PROJECT = "LIKE_PROJECT",
  UPDATE_STORY = "UPDATE_STORY",
  ADD_TIMELINE = "ADD_TIMELINE",
  LOAD_PROJECT = "LOAD_PROJECT",
  CREATE_ORDER = "CREATE_ORDER",
}

export type ProjectAction = {
  type: ProjectActionTypes;
  payload:
    | CommentDTO
    | LikeDTO
    | string
    | TimelineDTO
    | any
    | ProjectDTO
    | OrderDTO;
};

export const ProjectReducer = (state: ProjectDTO, action: ProjectAction) => {
  switch (action.type) {
    case ProjectActionTypes.ADD_TIMELINE: {
      return {
        ...state,
        timelines: [...state.timelines, action.payload],
      };
    }
    case ProjectActionTypes.UPDATE_STORY: {
      return {
        ...state,
        story: action.payload,
      };
    }
    case ProjectActionTypes.LOAD_PROJECT: {
      return action.payload;
    }
    case ProjectActionTypes.ADD_COMMENT: {
      return {
        ...state,
        commentCount: state.commentCount + 1,
        comments: [...state.comments, action.payload],
      };
    }
    case ProjectActionTypes.LIKE_COMMENT: {
      const newLike: CommentDTO = action.payload;
      //   Add like to comments
      state.comments.forEach((comment) => {
        if (comment.id === newLike.comment.id) {
          if (!comment.likes) {
            comment.likes = [];
          }
          comment.likes.push(newLike);
        }
      });
      return {
        ...state,
        comments: [...state.comments],
      };
    }
    case ProjectActionTypes.LIKE_PROJECT: {
      return {
        ...state,
        likes: [...state?.likes, action.payload],
      };
    }
    default:
      return state;
  }
};
