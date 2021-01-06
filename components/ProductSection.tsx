import { Icon, IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import Carousel from "./Carousel";

export default function ProductSection() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <Carousel />
        <div className="p-2 space-y-2">
          <div id="article">
            <div>
              <div className="text-red-400">Funding</div>
              <span className="text-2xl font-semibold">
                inCharge X - The 100W Swiss Army Knife of Cables
              </span>
            </div>
            <div className="font-normal text-md text-gray-700" id="content">
              The most crowdfunded cable EVER is back! Tiny, Universal, Ultra
              Powerful keyring cable.
            </div>
          </div>
          <div className="flex flex-row py-2">
            <img
              src="../thumbnail.jpg"
              className="h-10 w-10 rounded-full"
              alt=""
            />
            <div className="px-2">
              <p className="text-sm font-regular">Hoang Nguyen</p>
              <p className="text-sm font-light mb-1">
                8 Campaigns | Kiel, Germany
              </p>
            </div>
          </div>
          <hr />
          <div>
            <div className="flex flex-row justify-between">
              <div className="text-md space-x-2 text-red-400">
                <FontAwesomeIcon icon={["far", "clock"] as IconProp} />
                <span>2 days</span>
              </div>
              <p>832 backers</p>
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
          <div className="space-x-4 py-4">
            <button className="bg-red-400 text-white uppercase py-2 px-6 shadow-lg rounded text-sm font-medium">
              back it
            </button>
            <FontAwesomeIcon
              icon={["far", "heart"] as IconProp}
              className="mr-2 text-red-400"
              size="lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
