import React from "react";
import { useUser } from "../../contexts/UserContext";

export default function UserHeader({ onLogout }) {
  const { user } = useUser();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid gray",
        padding: "0.5rem",
        borderRadius: "4px",
      }}
    >
      <div>
        <img
          src="https://i.pravatar.cc/40?img=2"
          alt="user image"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "lightgray",
            marginRight: "1rem",
          }}
        />
      </div>
      <div>
        <div>{user.name}</div>
        <div>{user.email}</div>
      </div>
      <button style={{ marginLeft: "auto" }} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
