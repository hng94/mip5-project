import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type IPerkCard = {
  perk: any;
  child?: any;
};

export default function PerkCard({ perk }: IPerkCard) {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 max-w-md transition duration-300 ease-in-out transform hover:shadow-lg cursor-pointer">
      <div className="p-4 space-y-2">
        <p className="text-2xl capitalize">{perk}</p>
        <p className="text-gray-500 dark:text-gray-400 text-base">
          Single package to support this project
        </p>
        <div className="py-4">
          <span className="text-4xl font-bold text-green-400">$12</span>
          <span className="text-gray-400 float-right">92 backers</span>
        </div>
        <button className="bg-red-400 text-white uppercase py-2 px-6 shadow-lg rounded text-sm font-medium">
          back it
        </button>
      </div>
      <hr />
      <div className="p-4 space-y-2">
        <p className="uppercase">What's include</p>
        <p className="text-gray-500 dark:text-gray-400 text-base">
          <FontAwesomeIcon icon={"check"} className="text-green-400 mr-2" />
          Option 1
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-base">
          <FontAwesomeIcon icon={"check"} className="text-green-400 mr-2" />
          Option 2
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-base">
          <FontAwesomeIcon icon={"check"} className="text-green-400 mr-2" />
          Option 3
        </p>
      </div>
    </div>
  );
}
