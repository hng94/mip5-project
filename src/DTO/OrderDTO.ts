import { OrderStatus } from "../common/enum";
import { ProductDTO } from "./ProductDTO";
import { UserDTO } from "./UserDTO";

export interface OrderDTO {
  id: string;

  creator: UserDTO;

  product: ProductDTO;

  quantity: number;

  status: OrderStatus;

  createdDate: Date;
}

export interface CreateOrderInput {
  productId: string;

  quantity: number;
}

export interface UpdateOrderInput {
  productId: string;

  status: OrderStatus;
}
