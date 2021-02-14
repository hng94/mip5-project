import * as React from "react";
import ProductCard from "../Product/ProductCard";
import ProjectInfo from "./ProjectInfo";
import Tabs from "./ProjectTabs";

export default function Detail() {
  const product = {
    title: "Product title",
    description: "Product description",
    price: 100,
  };
  return (
    <>
      <ProjectInfo />
      <hr className="my-2" />
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-3">
          <Tabs />
        </div>
        <div>
          <ProductCard product={product} />
        </div>
      </div>
    </>
  );
}
