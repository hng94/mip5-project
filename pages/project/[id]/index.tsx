import * as React from "react";
import ProductCard from "../../../components/ProductCard";
import ProductSection from "../../../components/ProductSection";
import Tabs from "../../../components/Tabs";

export default function Detail() {
  const product = {
    title: "Product title",
    description: "Product description",
    price: 100,
  };
  return (
    <>
      <ProductSection />
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
