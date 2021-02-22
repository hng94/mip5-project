import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiCheckCircle } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { OrderDTO } from "../../DTO/OrderDTO";
import { ProductDTO } from "../../DTO/ProductDTO";
export type IProduct = {
  title: string;
  price: number;
  description: string;
  child?: any;
};

interface ProductCardProps {
  product: ProductDTO;
}

interface IOrderForm {
  quantity: number;
}

const CREATE_ORDER = gql`
  mutation createOrder($productId: ID!, $quantity: Float!) {
    createOrder(data: { productId: $productId, quantity: $quantity }) {
      id
      creator {
        id
      }
      quantity
      status
      product {
        id
      }
    }
  }
`;
export default function ProductCard({ product }: ProductCardProps) {
  const history = useHistory();
  const [state, setState] = useState(product);
  const { register, handleSubmit, errors } = useForm<IOrderForm>();
  const [createOrder, { loading, data }] = useMutation(CREATE_ORDER, {
    onCompleted: () => {
      history.push("/orders");
    },
  });
  const onSubmit = (data) => {
    createOrder({
      variables: {
        productId: product.id,
        quantity: parseInt(data.quantity),
      },
    });
  };
  if (state)
    return (
      <div className="flex mb-4 flex-col rounded bg-white border-gray-400 shadow max-w-md">
        <div className="p-4 space-y-2">
          <p className="text-2xl capitalize">{state.title}</p>
          <img style={{ width: "270px" }} src={state.url} alt={state.title} />
          <div className="py-4">
            <span className="text-4xl font-bold text-green-400">
              {state.price} €
            </span>
            <span>/unit</span>
            <p className="text-gray-500 float-right">
              {state.orders?.length} orders
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="number"
              name="quantity"
              className="form-input mt-1 block w-full rounded border-gray-300"
              defaultValue={1}
              max={99}
              min={1}
              ref={register({ required: true, min: 1, max: 99 })}
            />
            <button
              type="submit"
              className="bg-red-400 mt-2 text-white uppercase py-2 px-6 hover:shadow-lg hover:bg-red-500 rounded text-sm font-medium focus:outline-none"
            >
              Order
            </button>
          </form>
        </div>
        <hr />
        <div className="p-4 space-y-2">
          <p className="uppercase">description</p>
          <p className="text-gray-500 dark:text-gray-400 text-base">
            {state.description}
          </p>
        </div>
      </div>
    );
}
