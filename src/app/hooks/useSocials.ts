import { useCallback, useState } from "react";

const useSocials = (applyDarkMode: (isDark: boolean) => void) => {
  const [isBallExpanded, setIsBallExpanded] = useState(false);

  const handleBallAnimation = useCallback(
    (ball: HTMLDivElement | null) => {
      const detectDarkMode = () =>
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (ball) {
        const animations = ball.getAnimations();
        const handleAnimationEnd = () => {
          setIsBallExpanded(true);
          applyDarkMode(detectDarkMode());
        };

        ball.addEventListener("animationend", handleAnimationEnd);

        const firstAnimationEnded = animations?.[0].playState === "finished";
        if (firstAnimationEnded) {
          handleAnimationEnd();
        }
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
