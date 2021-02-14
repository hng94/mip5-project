import ProductCard from "./ProductCard";

export default function ProductList() {
  const perkList = ["single", "double", "deluxe", "early bird"];
  return (
    <div className="space-y-4">
      {perkList.map((perk, index) => (
        <ProductCard {...{ perk }} key={index} />
      ))}
    </div>
  );
}
