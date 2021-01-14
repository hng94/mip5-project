import * as React from "react";
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
      <div className="flex flex-col glass">
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
                    <div className="h-6 w-6 text-red-300"></div>
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
        <div className="bg-blue-500 text-white text-center py-2 font-bold uppercase">
          View all
        </div>
        <div className="p-2">
          <TagList />
        </div>
      </div>
    </>
  );
}
