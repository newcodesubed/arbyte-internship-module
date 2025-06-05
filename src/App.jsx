import VideoCard from "./components/VideoCard";
import { videoData } from "./data/videoData";

const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">YouTube Layout Clone</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videoData.map((video) => (
          <VideoCard
            key={video.id}
            thumbnail={video.thumbnail}
            title={video.title}
            author={video.author}
            views={video.views}
            time={video.time}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
