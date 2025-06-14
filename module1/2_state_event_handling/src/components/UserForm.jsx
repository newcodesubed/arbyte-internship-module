import { useState } from "react";
import useInput from "../hooks/useInput";

const UserForm = () => {
  const name = useInput("");
  const email = useInput("");
  const bio = useInput("");
  const player = useInput("");

  const [submissions, setSubmissions] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      id: Date.now(),
      name: name.value,
      email: email.value,
      bio: bio.value,
      player: player.value,
    };

    setSubmissions((prev) => [...prev, newEntry]);

    name.reset();
    email.reset();
    bio.reset();
    player.reset();
  };

  const filteredSubmissions = submissions.filter(
    (entry) =>
      entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.player.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.bio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full flex flex-col items-center relative px-4">
      {/* Top Right Button */}
      <div className="absolute top-4 right-4">
        <button
          className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition cursor-pointer"
          onClick={() => setShowForm((prev) => !prev)}
        >
          {showForm ? "View Submissions" : "Add New Entry"}
        </button>
      </div>

      {showForm ? (
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full mx-auto p-6 mt-16 bg-white/10 backdrop-blur-md shadow-lg rounded-lg space-y-4 text-white"
        >
          <h2 className="text-xl font-bold">User Player Profile</h2>
          <input
            type="text"
            placeholder="Name"
            className="border p-2 w-full rounded bg-transparent placeholder-white"
            {...name}
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 w-full rounded bg-transparent placeholder-white"
            {...email}
          />
          <input
            type="text"
            placeholder="Favorite Player Name"
            className="border p-2 w-full rounded bg-transparent placeholder-white"
            {...player}
          />
          <textarea
            placeholder="What you like about your player"
            className="border p-2 w-full rounded bg-transparent placeholder-white"
            {...bio}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save
          </button>
        </form>
      ) : (
        <div className="max-w-4xl w-full mx-auto mt-16">
          <div className="flex items-center gap-4 mb-6">
            <input
              type="text"
              placeholder="Search by name or player..."
              className="w-5/4 p-2 rounded border bg-white/20 placeholder-white text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* <button
              className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
              onClick={() => setShowForm((prev) => !prev)}
            >
              {showForm ? "View Submissions" : "Add New Entry"}
            </button> */}
          </div>

          <div className="grid gap-4">
            {filteredSubmissions.length === 0 ? (
              <p className="text-white text-center">
                No matching results found.
              </p>
            ) : (
              filteredSubmissions.map((entry) => (
                <div
                  key={entry.id}
                  className="bg-white/20 backdrop-blur-md text-white p-4 rounded shadow"
                >
                  <h3 className="uppercase text-4xl font-bold freckle-face-regular text-yellow-300 mb-2">
                    {entry.name}
                  </h3>
                  <p className="text-4xl uppercase freckle-face-regular text-purple-500 mb-2">
                    <strong className="text-2xl">Player:</strong> {entry.player}
                  </p>
                  <p className="ephesis-regular text-4xl">
                    <strong>{entry.bio}</strong>
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserForm;
