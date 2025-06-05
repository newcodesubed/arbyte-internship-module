const VideoCard = ({ thumbnail, title, author, views, time }) => {
  return (
    <div className="w-full sm:w-[300px]">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="mt-2">
        <h3 className="text-md font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{author}</p>
        <p className="text-sm text-gray-500">
          {views} • {time}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
