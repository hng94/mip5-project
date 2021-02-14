import React, { Dispatch, useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useClickOutside";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

type IDropdown = {
  id: string;
  name: string;
};

interface DropdownProps {
  items: IDropdown[];
  setValue: Dispatch<any>;
}

export default function Dropdown({ items, setValue }: DropdownProps) {
  // state showing if dropdown is open or closed
  const [dropdown, setDropdown] = useState(false);
  // managing dropdown items (list of dropdown items)

  const ref = useRef();
  // contains multiselect items
  const [selectedItem, setSelected] = useState(items[0]);

  const handleOnClick = (item: IDropdown) => {
    setSelected(item);
    setValue(item);
    toogleDropdown();
  };
  // toggle dropdown open/close
  const toogleDropdown = () => {
    setDropdown(!dropdown);
  };

  useOnClickOutside(ref, () => setDropdown(false));
  return (
    <>
      <div className="relative inline-block text-left w-full">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-between rounded border bg-white text-gray-700 border-gray-300 px-4 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={toogleDropdown}
          >
            {selectedItem.name}
            {dropdown ? (
              <FiChevronUp className="h-6" />
            ) : (
              <FiChevronDown className="h-6" />
            )}
          </button>
        </div>
        <div
          id="dropdown"
          ref={ref}
          className={`z-50 origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
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
            {items.map((item, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  onClick={() => handleOnClick(item)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
