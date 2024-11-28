import { useCallback, useState } from "react";

const useSocials = (applyDarkMode: (isDark: boolean) => void) => {
  const [isBallExpanded, setIsBallExpanded] = useState(false);

  const handleBallAnimation = useCallback(
    (ball: HTMLDivElement | null) => {
      const detectDarkMode = () =>
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (ball) {
        const handleAnimationEnd = (e: AnimationEvent) => {
          setIsBallExpanded(true);
          applyDarkMode(detectDarkMode());
        };

        ball.addEventListener("animationend", handleAnimationEnd);

        return () => {
          ball.removeEventListener("animationend", handleAnimationEnd);
        };
      }
    },
    [applyDarkMode]
  );

  return {
    handleBallAnimation,
    isBallExpanded,
  };
};

export default useSocials;
