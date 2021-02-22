import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import useAuth from "../../contexts/AuthContext";
import useProject from "../../contexts/ProjectContext";
import { TimelineDTO } from "../../DTO/TimelineDTO";
import { ProjectActionTypes } from "../../reducers/ProjectReducer";

interface TimelineProps {
  timelines: TimelineDTO[];
}
const ADD_TIMELINE = gql`
  mutation createTimeline($projectId: String!, $content: String!) {
    createTimeline(data: { projectId: $projectId, content: $content }) {
      content
      createdDate
    }
  }
`;
export default function Timeline() {
  const { register, errors, handleSubmit, reset } = useForm();
  const { state: project, dispatch: dispatchProject } = useProject();
  const { state: auth, dispatch: dispatchAuth } = useAuth();
  const [addTimeline, { loading, data }] = useMutation(ADD_TIMELINE, {
    onCompleted: ({ createTimeline }) => {
      dispatchProject({
        type: ProjectActionTypes.ADD_TIMELINE,
        payload: createTimeline,
      });
      reset({
        content: "",
      });
    },
  });
  const onSubmit = (data) => {
    addTimeline({
      variables: {
        projectId: project.id,
        content: data.content,
      },
    });
  };
  return (
    <>
      {auth.email === project.creator.email && project.deletedDate == null && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            ref={register({ required: true })}
            className="bg-gray-100 my-2 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 placeholder-gray-500 focus:outline-none focus:bg-white"
            name="content"
            placeholder="Type Your Comment"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white uppercase py-2 px-6 shadow-lg rounded text-sm font-medium"
          >
            add timeline
          </button>
        </form>
      )}
      <div className="flex justify-start">
        <ol className="p-4">
          {project.timelines.map((timeline, i) => (
            <li
              className="feed-item relative pb-5 pl-6 border-l-2 border-red-300 last:border-transparent"
              key={`timeline${i}`}
            >
              <time
                className="block text-gray-500 relative uppercase text-sm -top-1"
                dateTime="9-25"
              >
                {new Date(timeline.createdDate).toLocaleDateString()}
              </time>
              <span className="text">{timeline.content}</span>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
