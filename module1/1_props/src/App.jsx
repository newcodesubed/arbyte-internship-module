import Searchbar from "./components/SearchBar";

import Sidebar from "./components/Sidebar";
import VideoCard from "./components/VideoCard";
import { videoData } from "./data/videoData";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Searchbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Recommended Videos</h1>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {videoData.map((video) => (
              <VideoCard
                key={video.id}
                thumbnail={video.thumbnail}
                avatar={video.avatar}
                title={video.title}
                author={video.author}
                views={video.views}
                time={video.time}
                duration={video.duration}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
