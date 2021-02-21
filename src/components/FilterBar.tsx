import * as React from "react";
import { FiSearch, FiDroplet, FiLoader, FiTrendingUp } from "react-icons/fi";
import Dropdown from "./common/Dropdown";
import SearchInput from "./SearchInput";
export default function FilterBar() {
  return (
    <div className="rounded-md flex flex-col space-y-2">
      {/* <SearchInput /> */}
      <a
        href="#"
        className="rounded bg-white border-gray-300 border py-2 px-4  text-gray-700 hover:text-red-400"
      >
        <FiDroplet className="mb-1 inline-flex" />
        <span className="ml-2">Hot</span>
      </a>
      <a
        href="#"
        className="rounded bg-white border-gray-300 border py-2 px-4  text-gray-700 hover:text-red-400"
      >
        <FiLoader className="mb-1 inline-flex" />
        <span className="ml-2">New</span>
      </a>
      <a
        href="#"
        className="rounded bg-white border-gray-300 border py-2 px-4 text-gray-700 hover:text-red-400"
      >
        <FiTrendingUp className="mb-1 inline-flex" />
        <span className="ml-2">Trend</span>
      </a>
      <div>{/* <Dropdown /> */}</div>
    </div>
  );
}
