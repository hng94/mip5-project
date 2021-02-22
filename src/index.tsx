import React from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.css";

import App from "./components/App";
// import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  DefaultOptions,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { AuthProvider } from "./contexts/AuthContext";
import { CategoryProvider } from "./contexts/CategoryContext";
import { setContext } from "@apollo/client/link/context";
import { AuthDTO } from "./DTO/AuthDTO";
import ErrorBoundary from "./ErrorBoundary";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
  mutate: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};
const typeDefs = gql`
  extend type CreateUserInput {
    firstName: String
    lastName: String
    address: String
    postcode: String
    phone: String
    email: String
    password: String
  }

  extend type CreateProjectInput {
    title: String
    subTitle: String
    url: String
    categoryId: String
    story: String
    # startDate?: Date
    # duration?: Number
    products: [CreateProductInput]
    fundingGoal: Number
  }

  extend type UpdateProjectInput {
    id: ID
    title: String
    subTitle: String
    url: String
    categoryId: ID
    story: String
    # startDate?: Date
    # duration?: Number
    products: [UpdateProductInput]
    fundingGoal: Number
  }

  extend type CreateProductInput {
    title: String
    description: String
    price: Number
    url: String
  }

  extend type UpdateProductInput {
    id: ID
    title: String
    description: String
    price: Number
    url: String
  }

  extend type CreateOrderInput {
    productId: ID
    quantity: Number
  }

  extend type Category {
    id: String
    name: String
  }
`;

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const auth: AuthDTO = JSON.parse(localStorage.getItem("auth"));
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: auth?.token ? `Bearer ${auth.token}` : "",
    },
  };
});
const httpLink = createHttpLink({
  uri: "http://18.184.123.88:4000/graphql",
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
  typeDefs,
});

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <AuthProvider>
          <CategoryProvider>
            <App />
          </CategoryProvider>
        </AuthProvider>
      </ApolloProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
