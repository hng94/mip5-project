import { UserDTO } from "./UserDTO";

export interface TimelineDTO {
  creator: UserDTO;

  content: string;

  createdDate: Date;
}

export interface CreateTimelineDTO {
  projectId: string;

  content: string;
}
