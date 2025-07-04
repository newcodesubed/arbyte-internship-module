import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function AdminSidebar() {
  const { theme } = useTheme();
  return (
    <div
      style={{
        width: 200,
        backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
        color: theme === "light" ? "black" : "white",
        padding: "1rem",
      }}
    >
      <h3>Admin Menu</h3>
      <ul>
        <li>Dashboard</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}
