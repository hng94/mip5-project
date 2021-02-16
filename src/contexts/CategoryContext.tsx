import { gql, useQuery } from "@apollo/client";
import {
  createContext,
  Dispatch,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";

import { CategoryDTO } from "../DTO/CategoryDTO";

interface CategoryContextProps {
  categories: CategoryDTO[];
  setCategories: Dispatch<CategoryDTO[]>;
}

interface ICategoriesData {
  categories: CategoryDTO[];
}

const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
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
  const [categories, setCategories] = useState<CategoryDTO[]>();
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
