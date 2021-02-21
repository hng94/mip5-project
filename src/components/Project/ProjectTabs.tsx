import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import useAuth from "../../contexts/AuthContext";
import useProject from "../../contexts/ProjectContext";
import { CommentDTO } from "../../DTO/CommentDTO";
import { TimelineDTO } from "../../DTO/TimelineDTO";
import { ProjectActionTypes } from "../../reducers/ProjectReducer";
import Comments from "../Comment/Comments";
import QuillEditor from "../common/QuillEditor";
import Timeline from "./ProjectTimeline";

interface ProjectTabsProps {
  story: string;
  timelines: TimelineDTO[];
  comments: CommentDTO[];
}

const UPDATE_PROJECT = gql`
  mutation updateProject($id: ID!, $story: String!) {
    updateProject(data: { id: $id, story: $story }) {
      story
    }
  }
`;
export default function ProjectTabs() {
  const { state: auth, dispatch: dispatchAuth } = useAuth();
  const {
    state: { id, story, timelines, comments, creator },
    dispatch: dispatchProject,
  } = useProject();
  const [updateProject, { loading, data }] = useMutation(UPDATE_PROJECT, {
    onCompleted: ({ updateProject }) => {
      dispatchProject({
        type: ProjectActionTypes.UPDATE_STORY,
        payload: updateProject.story,
      });
    },
  });
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
                  {auth.email !== creator.email && (
                    <div dangerouslySetInnerHTML={{ __html: story }}></div>
                  )}
                  {auth.email === creator.email && (
                    <div>
                      <QuillEditor
                        story={story}
                        setStory={(newValue) => {
                          dispatchProject({
                            type: ProjectActionTypes.UPDATE_STORY,
                            payload: newValue,
                          });
                        }}
                      />
                      <button
                        onClick={() => {
                          updateProject({
                            variables: {
                              id,
                              story,
                            },
                          });
                        }}
                        className="bg-blue-500 mt-2 text-white uppercase py-2 px-6 shadow-lg rounded text-sm font-medium"
                      >
                        Save changes
                      </button>
                    </div>
                  )}
                </div>
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Timeline timelines={timelines} />
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
