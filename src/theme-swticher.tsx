"use client";

import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const [themeState, setThemeState] = useState(0);
  useEffect(() => {}, [themeState]);
  return <pre onClick={() => setThemeState((x) => x + 1)}>{themeState}</pre>;
};
