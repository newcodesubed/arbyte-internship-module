import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and Password are required.");
    } else {
      setError("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md w-full max-w-md"
    >
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full rounded mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full rounded mb-2"
      />
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Login
      </button>
      <div className="mt-4 text-sm">
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </div>
    </form>
  );
};

export default LoginForm;
