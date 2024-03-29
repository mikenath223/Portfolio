const onDarkMode = (cb) => {
  const isDarkMode = window?.matchMedia(
    "(prefers-color-scheme: dark)"
  )?.matches;

  if (isDarkMode) {
    document.documentElement.setAttribute("data-theme", "dark-theme");
    cb?.();
  }
};

const onToggleGitSrc = () => {
  const gitSoc = document.querySelector(".git-soc");
  gitSoc.src = "./src/assets/icons8-github-white.png";
};

onDarkMode();

document.querySelector(".ball").addEventListener("animationend", (e) => {
  e.target.querySelector(
    "p"
  ).innerHTML = `<a href="https://github.com/mikenath223" class="soc-ball" rel="noopener" target="_blank">
    <img
    src="./src/assets/icons8-github-30.png" class="git-soc" alt="github""></a>
    <a href="https://www.linkedin.com/in/michgoldenukeje/" class="soc-ball" rel="noopener" target="_blank">
    <img
    src="./src/assets/icons8-linkedin-30.png" alt="github"> </a>
    <a href="https://twitter.com/MichgoldenU" class="soc-ball git-soc" rel="noopener" target="_blank">
    <img
    src="./src/assets/icons8-twitter-30.png" alt="github"> </a>`;
  e.target.classList.replace("ball", "expand");
  onDarkMode(onToggleGitSrc);
});

const toggleSwitch = document.querySelector('input[type="checkbox"]');

const switchTheme = (e) => {
  const gitSoc = document.querySelector(".git-soc");
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark-theme");
    gitSoc.src = "./src/assets/icons8-github-white.png";
  } else {
    document.documentElement.setAttribute("data-theme", "light-theme");
    gitSoc.src = "./src/assets/icons8-github-30.png";
  }
};

toggleSwitch.addEventListener("change", switchTheme);
