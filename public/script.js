// Dark mode detection and application
const applyDarkMode = (isDark) => {
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "dark-theme" : "light-theme"
  );
  if (document.querySelector(".git-soc")) {
    document.querySelector(".git-soc").src = `/images/icons8-github-${
      isDark ? "white" : "30"
    }.png`;
  }
};

const detectDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

// Initialize dark mode
applyDarkMode(detectDarkMode());

// Header socials HTML
const headerSocials = `
  <a href="https://github.com/mikenath223" class="soc-ball" rel="noopener" target="_blank">
    <img src="/images/icons8-github-30.png" class="git-soc" alt="github">
  </a>
  <a href="https://www.linkedin.com/in/michgoldenukeje/" class="soc-ball" rel="noopener" target="_blank">
    <img src="/images/icons8-linkedin-30.png" alt="linkedin">
  </a>
  <a href="https://twitter.com/MichgoldenU" class="soc-ball" rel="noopener" target="_blank">
    <img src="/images/icons8-twitter-30.png" alt="twitter">
  </a>
`;

// Animation end event listener
document.querySelector(".ball").addEventListener("animationend", (e) => {
  e.target.querySelector("p").innerHTML = headerSocials;
  e.target.classList.replace("ball", "expand");
  applyDarkMode(detectDarkMode());
});

// Theme toggle switch
const toggleSwitch = document.querySelector('input[type="checkbox"]');
toggleSwitch.addEventListener("change", (e) => applyDarkMode(e.target.checked));

// System theme change listener
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    toggleSwitch.checked = e.matches;
    applyDarkMode(e.matches);
  });

// Initial state based on system preference
toggleSwitch.checked = detectDarkMode();
applyDarkMode(detectDarkMode());
