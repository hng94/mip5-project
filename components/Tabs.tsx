import dynamic from "next/dynamic";
import React, { useState } from "react";
import Comments from "./Comment/Comments";
import QuillEditor from "./QuillEditor";
import Story from "./Story";
import Timeline from "./Timeline";

export default function Tabs() {
  const [openTab, setOpenTab] = useState(0);
  const tabList = ["Story", "Timeline", "Comments"];
  const color = "red";
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pb-4 justify-between space-x-2"
            role="tablist"
          >
            {tabList.map((tab, index) => (
              <li key={tab} className="-mb-px last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 border border-red-400 rounded block leading-normal " +
                    (openTab === index
                      ? "text-white bg-" + color + "-400"
                      : "text-" + color + "-400 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(index);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded shadow">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space ">
                <div className={openTab === 0 ? "block" : "hidden"} id="link1">
                  <QuillEditor />
                </div>
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Timeline />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link1">
                  <Comments />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
