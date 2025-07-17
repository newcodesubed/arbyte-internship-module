import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function AdminSidebar() {
  const { theme } = useTheme();
  return (
    <div
      style={{
        width: 200,
        backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        fontFamily: "sans-serif",
      }}
    >
      <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Admin Menu</h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li
          style={{
            cursor: "pointer",
            marginBottom: "0.25rem",
            textDecoration: "underline",
          }}
        >
          Dashboard
        </li>
        <li
          style={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Settings
        </li>
      </ul>
    </div>
  );
}
