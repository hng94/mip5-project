export default function Timeline() {
  const events = ["Backlog", "Todo", "Doing", "Test", "Done"];
  return (
    <>
      <div className="flex justify-center">
        <ol className="p-4">
          {events.map((event, i) => (
            <li
              className="feed-item relative pb-5 pl-6 border-l-2 border-red-300 last:border-transparent"
              key={`event${i}`}
            >
              <time
                className="block text-gray-500 relative uppercase text-sm -top-1"
                dateTime="9-25"
              >
                Sep 25
              </time>
              <span className="text">
                Responded to need{"{"}" "{"}"}
                <a href="single-need.php">“Volunteer opportunity”</a>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
