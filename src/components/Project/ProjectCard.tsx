import React, { useState } from "react";
import { FiClock, FiHeart } from "react-icons/fi";
import { ProjectDTO } from "../../DTO/ProjectDTO";

interface CardProps {
  project: ProjectDTO;
}

export default function ProjectCard({ project }: CardProps) {
  const props = {
    category: "Education",
    title: "inCharge X - The 100W Swiss Army Knife of Cables",
    subtitle:
      "The most crowdfunded cable EVER is back! Tiny, Universal, Ultra Powerful keyring cable.",
    creator: {
      id: "1234",
      firstName: "Hoang",
      lastName: "Nguyen",
    },
    dueDate: "18/01/2021",
    fundingGoal: 10000,
    currentFund: 3000,
    media: "thumbnail.jpg",
  };
  return (
    <>
      <a href={`/project/${project.title}`}>
        <div className="flex flex-col bg-white overflow-hidden border-gray-300 rounded cursor-pointer max-w-4xl transition duration-300 ease-in-out transform hover:shadow-lg">
          <div className="aspect-w-4 aspect-h-3">
            <img src={props.media} alt={props.media} />
          </div>
          <div className="p-4">
            <div className="flex flex-row space-x-2 justify-between">
              <p className="uppercase text-red-400">{props.category}</p>
              <FiHeart className="h-6 cursor-pointer text-gray-400 hover:text-red-400" />
            </div>
            <a className="">
              {props.creator.firstName + " " + props.creator.lastName}
            </a>
            <hr />
            <div id="article" className="pt-2">
              <p className="text-lg truncate">{project.title}</p>
              <div className="font-normal text-sm text-gray-700" id="content">
                {props.subtitle}
              </div>
            </div>

            <div className="pt-2">
              <hr />
              <div className="text-md text-red-400 pt-2">
                <FiClock className="inline-flex mb-1 mr-1" />
                <span>{props.dueDate}</span>
              </div>
              <div className="">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
                  <div
                    style={{ width: "30%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                  ></div>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">
                  {(props.currentFund * 100) / props.fundingGoal}
                  <span className="text-xs">%</span>
                </span>
                <span className="text-green-500">${props.fundingGoal}</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
