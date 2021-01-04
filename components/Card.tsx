import { Icon, IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Card() {
  return (
    <div className="flex flex-col border border-gray-300 z-0 cursor-pointer rounded-lg max-w-4xl transition duration-300 ease-in-out transform hover:shadow-lg">
      <img
        className="h-60 w-max rounded-t-lg"
        src="thumbnail.jpg"
        alt="thumbnail"
      />
      <div className="px-2">
        <div className="flex flex-row space-x-2 p-2 justify-between">
          <p>Education</p>
          <FontAwesomeIcon
            icon={["far", "heart"] as IconProp}
            className="h-6 w-6 cursor-pointer hover:text-red-400"
            size="lg"
          />
        </div>
        <hr />
        <div id="article" className="p-2">
          <div>
            <span className="bg-red-400 text-white rounded-lg p-1 mr-2 text-xs">
              Funding
            </span>
            <span className="text-lg">
              inCharge X - The 100W Swiss Army Knife of Cables
            </span>
          </div>
          <div className="font-normal text-sm text-gray-700" id="content">
            The most crowdfunded cable EVER is back! Tiny, Universal, Ultra
            Powerful keyring cable.
          </div>
          <div className="text-sm font-light mb-1">
            By <a href="#">Hoang Nguyen</a>
          </div>
        </div>

        <div className="p-2">
          <hr />
          <div className="text-md space-x-2 text-red-400">
            <FontAwesomeIcon icon={["far", "clock"] as IconProp} />
            <span>2 days left </span>
          </div>
          <div className="pt-1">
            <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
              <div
                style={{ width: "30%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
              ></div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <span className="text-lg text-green-500">$8000</span>
              <span className="text-sm font-light text-gray-500 pl-1">
                funded
              </span>
            </div>
            <div className="text-gray-500">30%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
