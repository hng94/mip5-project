import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

export default function Comments() {
  const comments = [...Array(10)].map((value, index) => index);
  return (
    <>
      <div className="space-y-4">
        <CommentForm />
        {comments.map((c, index) => (
          <CommentCard key={index} />
        ))}
      </div>
    </>
  );
}
