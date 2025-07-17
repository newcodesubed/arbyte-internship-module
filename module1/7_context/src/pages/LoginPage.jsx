import React, { useState } from "react";
import { useUser } from "../contexts/UserContext";
import { useTheme } from "../contexts/ThemeContext";

export default function LoginPage({ onLogin }) {
  const { setUser } = useUser();
  const { theme } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, email });
    onLogin();
  };

  const isDark = theme === "dark";
  const bgColor = isDark ? "#333" : "#fff";
  const textColor = isDark ? "#fff" : "#000";
  const inputBg = isDark ? "#555" : "#fff";
  const inputText = isDark ? "#fff" : "#000";
  const inputBorder = isDark ? "#777" : "#ccc";

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isDark ? "#000" : "#f5f5f5",
      }}
    >
      <div
        style={{
          padding: "2rem",
          border: `1px solid ${inputBorder}`,
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          minWidth: "300px",
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Login</h2>

        <input
          value={name}
          style={{
            display: "block",
            width: "100%",
            padding: "0.5rem",
            marginBottom: "1rem",
            borderRadius: "4px",
            border: `1px solid ${inputBorder}`,
            backgroundColor: inputBg,
            color: inputText,
          }}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          value={email}
          style={{
            display: "block",
            width: "100%",
            padding: "0.5rem",
            marginBottom: "1rem",
            borderRadius: "4px",
            border: `1px solid ${inputBorder}`,
            backgroundColor: inputBg,
            color: inputText,
          }}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.75rem",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </form>
  );
}
