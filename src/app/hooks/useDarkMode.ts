import { useEffect, useState, useCallback } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const isDark =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return isDark;
  });

  const applyDarkMode = useCallback((isDark: boolean | undefined) => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark-theme" : "light-theme"
    );
  }, []);

  const toggleDarkMode = (enabled: boolean) => {
    setIsDarkMode(enabled);
    applyDarkMode(enabled);
  };

  useEffect(() => {
    applyDarkMode(isDarkMode);

    const systemThemeListener = (e: { matches: any }) => {
      const prefersDark = e.matches;
      setIsDarkMode(prefersDark);
      applyDarkMode(prefersDark);
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", systemThemeListener);

    return () => {
      mediaQuery.removeEventListener("change", systemThemeListener);
    };
  }, [applyDarkMode, isDarkMode]);

  return { isDarkMode, toggleDarkMode, applyDarkMode };
};

export default useDarkMode;
