import CommentCard from "./CommentCard";

export default function Comments() {
  const comments = [...Array(10)].map((value, index) => index);
  return (
    <>
      <div className="space-y-4">
        {comments.map((c, index) => (
          <CommentCard key={index} />
        ))}
      </div>
    </>
  );
}
