import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import Dropdown from "./Dropdown";

export default function FilterBar() {
  return (
    <div className="rounded-md border border-gray-300 flex justify-start p-2 space-x-2">
      <a href="#" className="rounded-full bg-gray-200 py-2 px-4">
        <FontAwesomeIcon className="text-red-400" icon="burn" size="lg" />
        <span className="ml-2">Hot</span>
      </a>
      <a href="#" className="rounded-full bg-gray-200 py-2 px-4">
        <FontAwesomeIcon className="text-red-400" icon="asterisk" size="lg" />
        <span className="ml-2">New</span>
      </a>
      <a href="#" className="rounded-full bg-gray-200 py-2 px-4">
        <FontAwesomeIcon className="text-red-400" icon="chart-line" size="lg" />
        <span className="ml-2">Trend</span>
      </a>
      <div className="mt-px">
        <Dropdown />
      </div>
    </div>
  );
}
