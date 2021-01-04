import { Icon, IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import useOnClickOutside from "../Hooks/useClickOutside";

type IDropdown = {
  items: string[];
  setItem: (item: any) => void;
};

export default function Dropdown() {
  // state showing if dropdown is open or closed
  const [dropdown, setDropdown] = useState(false);
  // managing dropdown items (list of dropdown items)
  const [items, setItem] = useState([
    "Animal",
    "Arts and Culture",
    "Community",
    "Education",
    "Environment",
    "Health",
    "Human Services",
    "International NGOs",
  ]);
  const ref = useRef();
  // contains multiselect items
  const [selectedItem, setSelected] = useState(null);

  const handleOnClick = (item) => {
    setSelected(item);
    toogleDropdown();
  };
  // toggle dropdown open/close
  const toogleDropdown = () => {
    setDropdown(!dropdown);
  };

  useOnClickOutside(ref, () => setDropdown(false));
  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex justify-between min-w-full w-48 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={toogleDropdown}
          >
            {selectedItem ? selectedItem : "Select options"}
            <FontAwesomeIcon
              className="ml-2"
              icon={`angle-${dropdown ? "up" : "down"}` as IconProp}
              size="lg"
            />
          </button>
        </div>
        <div
          id="dropdown"
          ref={ref}
          className={`z-10 origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
          transition ease-${dropdown ? "out" : "in"} 
          duration-${dropdown ? "100" : "75"} 
          transform opacity-${dropdown ? "100" : "0"}
          scale-${dropdown ? "100" : "95"}`}
        >
          <div
            className={`py-1 z-auto ${dropdown ? "block" : "hidden"}`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {items.map((item, key) => {
              return (
                <a
                  key={key}
                  href="#"
                  onClick={() => handleOnClick(item)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
