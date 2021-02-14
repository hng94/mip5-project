import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./components/App";
// import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  ApolloProvider,
  DefaultOptions,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { AuthProvider } from "./contexts/AuthContext";
import { CategoryProvider } from "./contexts/CategoryContext";

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

  extend type Category {
    id: String
    name: String
  }
`;
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
  typeDefs,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <CategoryProvider>
          <App />
        </CategoryProvider>
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
