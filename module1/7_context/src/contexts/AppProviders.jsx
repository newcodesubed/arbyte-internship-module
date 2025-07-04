import React from "react";
import { ThemeProvider } from "./ThemeContext";
import { UserProvider } from "./UserContext";

export const AppProviders = ({ children }) => (
  <ThemeProvider>
    <UserProvider>{children}</UserProvider>
  </ThemeProvider>
);
