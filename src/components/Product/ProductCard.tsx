import { FiCheckCircle } from "react-icons/fi";
export type IProduct = {
  title: string;
  price: number;
  description: string;
  child?: any;
};

export default function ProductCard(props) {
  const { product } = props;
  return (
    <div className="flex flex-col rounded bg-white border-gray-400 shadow max-w-md">
      <div className="p-4 space-y-2">
        <p className="text-2xl capitalize">{product.title}</p>
        <p className="text-gray-500 dark:text-gray-400 text-base">
          {product.description}
        </p>
        <div className="py-4">
          <span className="text-4xl font-bold text-green-400">
            ${product.price}
          </span>
          {/* <span className="text-gray-400 float-right">92 backers</span> */}
        </div>
        <button className="bg-red-400 text-white uppercase py-2 px-6 hover:shadow-lg hover:bg-red-500 rounded text-sm font-medium focus:outline-none">
          back it
        </button>
      </div>
      <hr />
      <div className="p-4 space-y-2">
        <p className="uppercase">What's include</p>
        <p className="text-gray-500 dark:text-gray-400 text-base">
          <FiCheckCircle className="text-green-400 mr-2 inline-flex" />
          Option 1
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-base">
          <FiCheckCircle className="text-green-400 mr-2 inline-flex" />
          Option 2
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-base">
          <FiCheckCircle className="text-green-400 mr-2 inline-flex" />
          Option 3
        </p>
      </div>
    </div>
  );
}
