import { OrderDTO } from "./OrderDTO";
import { ProjectDTO } from "./ProjectDTO";

export interface UserDTO {
  id: string;

  firstName: string;

  lastName: string;

  email: string;

  password: string;

  projects: ProjectDTO[];

  address?: string;

  postcode?: string;

  phone?: string;

  orders?: OrderDTO[];

  comments?: Comment[];
}
