import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function CommentForm() {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 glass dark:border-gray-800 p-4 rounded-xl border w-full">
        <div className="flex justify-between">
          <div className="flex items-center">
            <img
              className="h-11 w-11 rounded-full"
              src="https://pbs.twimg.com/profile_images/1287562748562309122/4RLk5A_U_x96.jpg"
            />
            <div className="ml-1.5 text-sm leading-tight">
              <span className="text-black dark:text-white font-bold block ">
                Visualize Value
              </span>
              <span className="text-gray-500 dark:text-gray-400 font-normal block">
                @visualizevalue
              </span>
            </div>
          </div>
        </div>
        <form className="w-full">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-2 mt-2">
              <textarea
                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 placeholder-gray-500 focus:outline-none focus:bg-white"
                name="body"
                placeholder="Type Your Comment"
                required
              ></textarea>
            </div>
            <div className="w-full md:w-full flex items-start px-3">
              <div className="-mr-1">
                <button className="bg-blue-500 text-white uppercase py-2 px-6 shadow-lg rounded text-sm font-medium">
                  comment
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
