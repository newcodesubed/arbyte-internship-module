import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, number });
    navigate("/menu");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg text-black shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Name"
          className="block w-full mb-4 p-2 border"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="block w-full mb-4 p-2 border"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <button type="submit" className="bg-yellow-400 text-white px-4 py-2 rounded">
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
