import React, { useState } from "react";
import { AppProviders } from "./contexts/AppProviders";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AppProviders>
      {isLoggedIn ? (
        <HomePage onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <LoginPage onLogin={() => setIsLoggedIn(true)} />
      )}
    </AppProviders>
  );
}
