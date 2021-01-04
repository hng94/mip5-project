import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import TagList from "./TagList";

export default function PopularList() {
  const Teams = [
    { name: "Heart", icon: "heart" },
    { name: "Coffee", icon: "coffee" },
    { name: "Dog", icon: "dog" },
    { name: "Cat", icon: "cat" },
    { name: "Hammer", icon: "hammer" },
  ];

  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-300 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="p-2 text-md text-left">
                      Popular Teams
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {Teams.map((t, index) => (
                    <tr key={index}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="m-2">{index + 1}.</div>
                          <div className="h-6 w-6 text-red-300">
                            <FontAwesomeIcon
                              icon={t.icon as IconProp}
                              size="lg"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {t.name}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="bg-blue-500 text-white text-center m-5 rounded-md py-2 font-bold uppercase">
                View all
              </div>
              <div className="ml-5 mb-5">
                <TagList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
