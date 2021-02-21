import { Dispatch } from "react";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";

interface SearchInputProps {
  value: string;
  setValue: Dispatch<string>;
}

interface SearchFormProps {
  searchQuery: string;
}
export default function SearchInput({ value, setValue }: SearchInputProps) {
  const { register, handleSubmit, errors } = useForm<SearchFormProps>();
  const onSubmit = (data: SearchFormProps) => {
    console.log(data);
    setValue(data.searchQuery);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border rounded border-gray-300 bg-white flex"
    >
      <FiSearch type="submit" className="absolute h-10 ml-4 text-gray-700" />
      <input
        type="text"
        name="searchQuery"
        className="inline-flex rounded border-transparent form-input bg-transparent focus:outline-none w-full pl-10"
        placeholder="Search"
        ref={register()}
      />
    </form>
  );
}
