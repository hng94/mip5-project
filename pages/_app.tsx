import "../styles/globals.css";
import "../styles/custom-style.scss";

import React from "react";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <div className="container mx-auto p-6 max-w-screen-xl">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
