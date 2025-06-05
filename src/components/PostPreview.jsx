const PostPreview = ({ title, author, date, excerpt }) => {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-500">
        By {author} on {date}
      </p>
      <p className="mt-2">{excerpt}</p>
    </div>
  );
};

export default PostPreview;
