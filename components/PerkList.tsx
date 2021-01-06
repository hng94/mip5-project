import PerkCard from "./PerkCard";

export default function PerkList() {
  const perkList = ["single", "double", "deluxe", "early bird"];
  return (
    <div className="space-y-4">
      {perkList.map((perk, index) => (
        <PerkCard {...{ perk }} key={index} />
      ))}
    </div>
  );
}
