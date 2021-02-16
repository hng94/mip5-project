import { LikeDTO } from "./LikeDTO";
import { ProjectDTO } from "./ProjectDTO";
import { UserDTO } from "./UserDTO";

export interface CommentDTO {
  id: string;
  creator: UserDTO;

  project: ProjectDTO;
  content: string;

  likeCount: number;

  likes: LikeDTO[];

  createdDate: Date;
}

export interface CreateCommentDTO {
  projectId: string;

  content: string;
}
