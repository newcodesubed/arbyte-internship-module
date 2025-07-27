import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Home</h1>
      <div className="mt-4">
        {posts.map((p) => (
          <div key={p.id} className="border p-2 mb-2">
            <h2 className="font-bold">{p.title}</h2>
            <Link to={`/post/${p.id}`} className="text-blue-500">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
