const VideoCard = ({
  thumbnail,
  avatar,
  title,
  author,
  views,
  time,
  duration,
}) => {
  return (
    <div className="w-full cursor-pointer">
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover rounded-xl transition-transform duration-200 hover:scale-105"
        />
        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded">
          {duration}
        </div>
      </div>
      <div className="mt-3 flex gap-3">
        <img
          src={avatar}
          alt={author}
          className="w-9 h-9 rounded-full object-cover"
        />
        <div>
          <h3 className="text-md font-semibold leading-snug">{title}</h3>
          <p className="text-sm text-gray-600">{author}</p>
          <p className="text-sm text-gray-500">
            {views} • {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
