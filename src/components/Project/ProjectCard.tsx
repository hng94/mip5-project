import React, { useState } from "react";
import { FiClock, FiHeart, FiThumbsUp, FiMessageCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ProjectDTO } from "../../DTO/ProjectDTO";

interface CardProps {
  project: ProjectDTO;
}

export default function ProjectCard({ project }: CardProps) {
  return (
    <>
      <Link to={`/projects/detail/${project.id}`}>
        <div className="max-h-full flex flex-col bg-white overflow-hidden border-gray-300 rounded cursor-pointer max-w-4xl transition duration-300 ease-in-out transform hover:shadow-lg">
          <div className="aspect-w-4 aspect-h-3">
            <img className="w-full" src={project.url} alt={project.url} />
          </div>
          <div className="p-4">
            <div className="flex flex-row space-x-2 justify-between">
              <p className="uppercase text-red-400">{project.category.name}</p>
              <div className="space-x-4">
                <span>
                  <span>{project.likeCount} </span>
                  <FiThumbsUp className="h-6 inline-block text-red-500" />
                </span>
                <span>
                  <span>{project.commentCount} </span>
                  <FiMessageCircle className="h-6 inline-block text-blue-500" />
                </span>
              </div>
            </div>
            <p className="">
              {project.creator.firstName + " " + project.creator.lastName}
            </p>
            <hr />
            <div className="h-40 pt-2">
              <p className="text-lg truncate">{project.title}</p>
              <div className="font-normal text-sm text-gray-700" id="content">
                {project.subTitle}
              </div>
            </div>

            <div className="pt-2">
              <hr />
              <div className="text-md text-red-400 pt-2">
                <FiClock className="inline-flex mb-1 mr-1" />
                <span>
                  {new Date(project.createdDate).toLocaleDateString()}
                </span>
              </div>
              <div className="">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
                  <div
                    style={{
                      width: `${
                        (project.currentFund * 100) / project.fundingGoal
                      }%`,
                    }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                  ></div>
                </div>
              </div>
              <div className="flex flex-row space-x-2">
                <span className="text-green-700">
                  {(project.currentFund * 100) / project.fundingGoal}
                  <span className="text-xs"> % funded</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
