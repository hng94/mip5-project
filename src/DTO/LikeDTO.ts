import { CommentDTO } from "./CommentDTO";
import { ProjectDTO } from "./ProjectDTO";
import { UserDTO } from "./UserDTO";

export interface LikeDTO {
  creator: UserDTO;

  project: ProjectDTO;

  comment: CommentDTO;

  createdDate: Date;
}

export interface LikeProjectInputDTO {
  projectId: string;
}

export interface LikeCommentInputDTO {
  commentId: string;
}
