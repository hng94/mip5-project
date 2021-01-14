import * as React from "react";

export default function TagList() {
  const Tags = ["Backlog", "Design", "To-do", "Doing", "Testing", "Done"];
  return (
    <div className="flex flex-wrap">
      {Tags.map((t) => (
        <div
          key={t}
          className="rounded-md bg-gray-200 m-2 p-2 text-sm text-blue-500"
        >
          {t}
        </div>
      ))}
    </div>
  );
}
