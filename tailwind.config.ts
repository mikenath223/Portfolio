import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "body-bg-light": "rgb(255, 255, 255)",
        "body-bg-dark": "#000",
        "body-font-light": "#292922",
        "body-font-dark": "#fff",
        "clip-bg-light": "#d6edff80",
        "clip-bg-dark": "#1d2225",
        "dark-font-light": "#000",
        "dark-font-dark": "#e1e1ff",
        "span-bg": "#ef6034",
        "ball-bg-light": "rgba(7, 6, 6, 0.6)",
        "ball-bg-dark": "#000",
        "intro-h1-light": "rgb(48, 44, 44)",
        "intro-h1-dark": "#fff",
        "skills-bg-light": "rgb(6, 21, 31)",
        "skills-bg-dark": "#161616",
        "skill-bg-light": "#fff",
        "skill-bg-dark": "#222222",
        "slider-bg-light-light": "#fcf9f9",
        "slider-bg-light-dark": "#000",
        "slider-bg-tint-light": "#ededf3",
        "slider-bg-tint-dark": "#000",
        "slider-border-light": "rgba(0, 0, 0, 0.7)",
        "slider-border-dark": "rgb(255, 255, 255)",
        "contact-bg-light": "#262626",
        "contact-bg-dark": "#141414",
        "feature-proj-bg-light": "#f6f8fc",
        "feature-proj-bg-dark": "#131419",
        "proj-desc-light": "#3c455c",
        "proj-desc-dark": "#fff",
        "soft-highlight-light": "#ffffff",
        "soft-highlight-dark": "rgba(255, 255, 255, 0.05)",
        "dark-highlight-light": "#cfcdcd",
        "dark-highlight-dark": "rgba(0, 0, 0, 0.51)",
      },
      keyframes: {
        rollInSmall: {
          from: {
            opacity: "0",
            transform: "translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)",
          },
          to: {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        rollIn: {
          from: {
            opacity: "0.8",
            transform: "translate(0, 0) rotate(0deg)",
          },
          to: {
            opacity: "1",
            transform: "translate(0, -700px) rotate(360deg)",
          },
        },
        scale: {
          from: { transform: "scale(0.8)" },
          "50%": { transform: "scale(1.2)" },
          to: { transform: "scale(1)" },
        },
        slide: {
          "50%": { transform: "translateY(-5px)" },
          "100%": { transform: "translateY(10px)" },
        },
        imgHold: {
          from: {
            opacity: "1",
            transform: "rotate3d(0, 1, 0, 90deg)",
          },
          "30%, 50%, 70%": {
            opacity: "0",
            transform: "rotate3d(0, 1, 0, 180deg)",
          },
          "80%, 90%, to": {
            opacity: "1",
            transform: "rotate3d(0, 1, 0, 360deg)",
          },
        },
        pInfo: {
          from: {
            opacity: "0",
            height: "0px",
          },
          "30%, 50%, 70%": {
            opacity: "1",
            height: "max-content",
            paddingTop: "30%",
          },
          "80%, to": {
            opacity: "0",
            height: "0px",
          },
        },
        cursor: {
          "50%": { opacity: "0" },
        },
        drift: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "roll-in-small": "rollInSmall 3s forwards linear",
        scale: "scale 1.5s forwards linear",
        slide: "slide 2s ease-in-out infinite",
        "img-hold": "imgHold 12s infinite 5s linear",
        "p-info": "pInfo 12s infinite 5s linear",
        cursor: "cursor 0.5s infinite",
        drift: "drift 7s infinite linear",
        "roll-in": "rollIn 3s forwards linear",
      },
    },
  },
  plugins: [],
};
export default config;
