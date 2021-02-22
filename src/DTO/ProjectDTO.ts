import { CategoryDTO } from "./CategoryDTO";
import { CommentDTO } from "./CommentDTO";
import { LikeDTO } from "./LikeDTO";
import { ProductDTO } from "./ProductDTO";
import { TimelineDTO } from "./TimelineDTO";
import { UserDTO } from "./UserDTO";

export interface ProjectDTO {
  id?: string;

  title?: string;

  subTitle?: string;

  url?: string;

  category?: CategoryDTO;

  story?: string;

  creator?: UserDTO;

  timelines?: TimelineDTO[];

  backers?: UserDTO[];

  products?: ProductDTO[];

  likes?: LikeDTO[];

  likeCount?: number;

  comments?: CommentDTO[];

  commentCount?: number;

  createdDate?: Date;

  deletedDate?: Date;

  fundingGoal?: number;

  currentFund?: number;

  startDate?: Date;

  duration?: number;
}

export function getCurrentFund(project: ProjectDTO) {
  const price = project.products?.[0].price || 0;
  const quantity = project.products?.[0].orders
    .map((o) => o.quantity)
    .reduce((q, total) => q + total, 0);
  const currentFund = price * quantity;
  return currentFund;
}
