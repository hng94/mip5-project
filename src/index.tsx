import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./pages/App";
// import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  ApolloProvider,
  DefaultOptions,
  InMemoryCache,
} from "@apollo/client";
import { AuthProvider } from "./contexts/AuthContext";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
