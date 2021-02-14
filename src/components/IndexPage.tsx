import React, { FC } from "react";
import { IProject } from "../types/IProject";
import ProjectCard from "./Project/ProjectCard";
import FilterBar from "./FilterBar";

interface IndexPageProps {
  projects: IProject[];
}
export const IndexPage = ({ projects = [] }: IndexPageProps) => {
  return (
    <div>
      <div className="grid grid-cols-4 space-x-6">
        <FilterBar />
        <div className="col-span-3">
          <div className="grid grid-col sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((value, index) => (
              <ProjectCard project={value} key={index} />
            ))}
          </div>
          <div className="mt-4 text-center text-white rounded bg-red-400 cursor-pointer px-3 py-2 transition duration-300 ease-in-out transform hover:shadow-lg hover:bg-red-500">
            Show more
          </div>
        </div>
      </div>
    </div>
  );
};
