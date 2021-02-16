import { CategoryDTO } from "./CategoryDTO";
import { LikeDTO } from "./LikeDTO";
import { ProductDTO } from "./ProductDTO";
import { TimelineDTO } from "./TimelineDTO";
import { UserDTO } from "./UserDTO";

export interface ProjectDTO {
  id: string;

  title: string;

  subTitle: string;

  url?: string;

  category: CategoryDTO;

  story: string;

  creator: UserDTO;

  timelines: TimelineDTO[];

  backers: UserDTO[];

  products: ProductDTO[];

  likes: LikeDTO[];

  likeCount: number;

  comments: Comment[];

  commentCount: number;

  createdDate: Date;

  fundingGoal: number;

  startDate: Date;

  duration: number;
}
