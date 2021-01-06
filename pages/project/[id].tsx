import { Icon, IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import Carousel from "../../components/Carousel";
import ProductSection from "../../components/ProductSection";
import Tabs from "../../components/Tabs";

export default function Detail() {
  return (
    <>
      <ProductSection />
      <hr className="my-2" />
      <Tabs />
    </>
  );
}
