import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ login }) {
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleLogin = () => {
    login(role);
    navigate("/");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <div className="mt-4">
        <label className="block mb-2">Select Role:</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-1"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button
          onClick={handleLogin}
          className="block mt-4 bg-blue-500 text-white px-3 py-1 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
