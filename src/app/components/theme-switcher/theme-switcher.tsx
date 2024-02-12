"use client";

import React, { useEffect, useState } from "react";
import styles from "./theme-switcher.module.css";

export const ThemeSwitcher = () => {
  const [themeState, setThemeState] = useState(0);

  useEffect(() => {
    const theme = themeState === 1 ? "light" : "dark";
    document.body.classList.toggle("dark-theme", theme === "dark");
    document.body.classList.toggle("light-theme", theme === "light");
  }, [themeState]);

  const toggleTheme = () => {
    setThemeState((prevState) => (prevState === 0 ? 1 : 0));
  };

  return (
    <button
      className={`${styles.button} ${themeState === 1 ? styles["light-mode"] : ""}`}
      onClick={toggleTheme}
    >
      {themeState === 0 ? "🌙" : "☀️"}
    </button>
  );
};
