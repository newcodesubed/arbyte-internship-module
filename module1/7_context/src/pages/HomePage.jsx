import React from "react";
import UserHeader from "../components/user/UserHeader";
import AdminSidebar from "../components/user/AdminSidebar";
import ThemeToggle from "../components/common/ThemeToggle";

export default function HomePage({ onLogout }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <AdminSidebar />
      <div style={{ flex: 1, padding: "1rem" }}>
        <UserHeader onLogout={onLogout} />
        <ThemeToggle />
        <h2>Welcome to the app!</h2>
      </div>
    </div>
  );
}
