import { OrderDTO } from "./OrderDTO";
import { ProjectDTO } from "./ProjectDTO";

export interface ProductDTO {
  id: string;

  title: string;

  description: string;

  price: number;

  url: string;

  project: ProjectDTO;

  orders: OrderDTO[];
}

export interface CreateProductInput {
  title: string;

  description: string;

  price: number;

  url: string;
}
