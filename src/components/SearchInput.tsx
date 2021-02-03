import { FiSearch } from "react-icons/fi";

export default function SearchInput() {
  return (
    <div className="border rounded border-gray-300 bg-white flex">
      <FiSearch className="absolute h-10 ml-4 text-gray-700" />
      <input
        type="text"
        className="inline-flex rounded border-transparent form-input bg-transparent focus:outline-none w-full pl-10"
        placeholder="Search"
      />
    </div>
  );
}
