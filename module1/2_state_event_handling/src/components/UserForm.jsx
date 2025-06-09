import { useState } from "react";
import useInput from "../hooks/useInput";

const UserForm = () => {
  const name = useInput("");
  const email = useInput("");
  const bio = useInput("");
  const player = useInput("");

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({
      name: name.value,
      email: email.value,
      player: player.value,
      bio: bio.value,
    });

    name.reset();
    email.reset();
    bio.reset();
    player.reset();
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full mx-auto p-6 bg-white/10 backdrop-blur-md shadow-lg rounded-lg space-y-4 text-white"
      >
        <h2 className="text-xl font-bold">User Profile</h2>

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
          placeholder="Bio"
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
      {submittedData && (
        <div className="mt-6 max-w-md mx-auto bg-white/20 backdrop-blur-md text-white p-4 rounded shadow">
          <h3 className="text-lg font-bold mb-2">Submitted Data:</h3>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Player:</strong> {submittedData.player}
          </p>
          <p>
            <strong>Bio:</strong> {submittedData.bio}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserForm;
