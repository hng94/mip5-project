import { Icon, IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import Carousel from "../../../components/Carousel";
import PerkCard from "../../../components/PerkCard";
import PerkList from "../../../components/PerkList";
import ProductSection from "../../../components/ProductSection";
import Tabs from "../../../components/Tabs";

export default function Detail() {
  return (
    <>
      <ProductSection />
      <hr className="my-2" />
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-3">
          <Tabs />
        </div>
        <div>
          <PerkList />
        </div>
      </div>
    </>
  );
}
