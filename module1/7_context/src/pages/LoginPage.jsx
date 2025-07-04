import React, { useState } from "react";
import { useUser } from "../contexts/UserContext";

export default function LoginPage({ onLogin }) {
  const { setUser } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, email });
    onLogin();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
