import { gql, useQuery } from "@apollo/client";
import {
  createContext,
  Dispatch,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { ICategory } from "../types/ICategory";

interface CategoryContextProps {
  categories: ICategory[];
  setCategories: Dispatch<ICategory[]>;
}

interface ICategoriesData {
  categories: ICategory[];
}

const GET_CATEGORIES = gql`
    query GetCategories() {
        categories() {
            id
            name
        }
    }
`;
export const CategoryContext = createContext<CategoryContextProps>({
  categories: [],
  setCategories: () => {},
});

export const CategoryProvider: FC = ({ children }) => {
  const [categories, setCategories] = useState<ICategory[]>();
  const { loading, error, data } = useQuery<ICategoriesData>(GET_CATEGORIES);
  useEffect(() => {
    if (data) {
      setCategories(data.categories);
    }
  }, [data]);
  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default function useCategory() {
  return useContext(CategoryContext);
}
