import "../styles/globals.css";
import "../styles/editor-style.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Nav from "../components/Nav";
library.add(fas);
library.add(far);
library.add(fab);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <div className="container mx-auto p-6 max-w-screen-lg ">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
