import { useEffect, useState } from "react";

export const useCheckDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDarkMode);
    };

    // Initial check
    checkDarkMode();

    // Set up a MutationObserver to watch for changes to the classList
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(
      document.querySelector("html") ?? document.documentElement,
      {
        attributes: true,
        attributeFilter: ["class"],
      }
    );

    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    isDarkMode,
  };
};
