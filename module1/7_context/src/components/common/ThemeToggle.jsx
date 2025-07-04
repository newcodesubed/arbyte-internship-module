import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </motion.button>
  );
}
