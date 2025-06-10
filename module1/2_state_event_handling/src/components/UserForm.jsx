import { useState } from "react";
import useInput from "../hooks/useInput";

const UserForm = () => {
  const name = useInput("");
  const email = useInput("");
  const bio = useInput("");
  const player = useInput("");

  const [submissions, setSubmissions] = useState([]);
  const [showForm, setShowForm] = useState(true);

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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <button
        className="mb-6 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
        onClick={() => setShowForm((prev) => !prev)}
      >
        {showForm ? "View Submissions" : "Add New Entry"}
      </button>

      {showForm ? (
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full mx-auto p-6 bg-white/10 backdrop-blur-md shadow-lg rounded-lg space-y-4 text-white"
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
            placeholder="favorite Player Name"
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
        <div className="max-w-2xl w-full mx-auto grid gap-4">
          {submissions.length === 0 ? (
            <p className="text-white text-center">No submissions yet.</p>
          ) : (
            submissions.map((entry) => (
              <div
                key={entry.id}
                className="bg-white/20 backdrop-blur-md text-white p-4 rounded shadow"
              >
                <h3 className="text-4xl font-bold  freckle-face-regular text-yellow-300 mb-2">
                  {entry.name}
                </h3>
                <p className="uppercase">
                  <strong>Player:</strong> {entry.player}
                </p>
                <p className="ephesis-regular text-4xl">
                  <strong>{entry.bio}</strong>
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default UserForm;
