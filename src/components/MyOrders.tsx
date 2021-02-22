import { gql, useMutation, useQuery } from "@apollo/client";
import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../contexts/AuthContext";
import { OrderDTO } from "../DTO/OrderDTO";

const GET_MY_ORDERS = gql`
  query myOrders {
    myOrders {
      id
      product {
        title
        project {
          title
          id
        }
      }
      quantity
      status
      createdDate
    }
  }
`;

const REMOVE_ORDER = gql`
  mutation removeOrder($id: String!) {
    removeOrder(id: $id)
  }
`;

interface RenderOrderItemProps {
  order: OrderDTO;
  onRemove: () => void;
}

const RenderProjectItem = ({ order, onRemove }: RenderOrderItemProps) => {
  return (
    <tr key={order.id}>
      <td className="px-6 py-4 whitespace-nowrap">
        {order.product.project.deletedDate == null && (
          <Link
            className="text-sm font-medium text-blue-500 hover:underline"
            to={`/projects/detail/${order.product.project.id}`}
          >
            {order.product.project.title}
          </Link>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <p className="text-sm text-gray-900">{order.product.title}</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="uppercase px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {order.quantity}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {new Date(order.createdDate).toLocaleDateString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {order.status}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button onClick={onRemove} className="text-red-500 p-2">
          Remove
        </button>
      </td>
    </tr>
  );
};

interface IMyOrders {
  myOrders: OrderDTO[];
}
export default function MyOrders() {
  const { state, dispatch } = useAuth();
  const [myOrders, setMyOrders] = useState<OrderDTO[]>(null);
  const { loading, data } = useQuery<IMyOrders>(GET_MY_ORDERS);
  const [removeOrder, { data: removedId, error: removeError }] = useMutation(
    REMOVE_ORDER,
    {
      onCompleted: ({ removeOrder }) => {
        console.log(removeOrder);
        const updatedMyProjects = myOrders.filter((p) => p.id !== removeOrder);
        setMyOrders([...updatedMyProjects]);
      },
    }
  );
  useEffect(() => {
    if (data && data.myOrders) {
      setMyOrders([...data.myOrders]);
    }
  }, [data]);
  if (loading) <pre className="text-red-500">Loading</pre>;
  if (myOrders)
    return (
      <>
        <div className="py-4 flex flex-row justify-between">
          <p className="text-3xl uppercase">My orders</p>
        </div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 sm:rounded-lg shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Project
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Product
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Created date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">...</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {myOrders.map((order) => (
                      <RenderProjectItem
                        key={order.id}
                        order={order}
                        onRemove={() => {
                          removeOrder({
                            variables: {
                              id: order.id,
                            },
                          });
                        }}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );

  return null;
}
