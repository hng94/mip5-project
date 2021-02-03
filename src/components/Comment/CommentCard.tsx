import { FiHeart } from "react-icons/fi";

export default function CommentCard() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 dark:border-gray-800 p-4 rounded-lg border w-full">
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
          <p className="text-black dark:text-white block text-xl leading-snug mt-3">
            “No one ever made a decision because of a number. They need a
            story.” — Daniel Kahneman
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">
            10:05 AM · Dec 19, 2020
          </p>
          <div className="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>
          <div className="text-gray-500 dark:text-gray-400 flex mt-3">
            <div className="flex items-center mr-6">
              <FiHeart className="text-red-400 inline-flex" />
              <span className="ml-3">615</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
