const onDarkMode = (cb) => {
  const isDarkMode = window?.matchMedia(
    "(prefers-color-scheme: dark)"
  )?.matches;

  if (isDarkMode) {
    document.documentElement.setAttribute("data-theme", "dark-theme");
    document.documentElement.classList.add("dark");
    cb?.();
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const onToggleGitSrc = () => {
  const gitSoc = document.querySelector(".git-soc");
  gitSoc.src = "/images/icons8-github-white.png";
};

onDarkMode();

const headerSocials = `<a href="https://github.com/mikenath223" class="soc-ball" rel="noopener" target="_blank">
    <img
    src="/images/icons8-github-30.png" class="git-soc" alt="github""></a>
    <a href="https://www.linkedin.com/in/michgoldenukeje/" class="soc-ball" rel="noopener" target="_blank">
    <img
    src="/images/icons8-linkedin-30.png" alt="github"> </a>
    <a href="https://twitter.com/MichgoldenU" class="soc-ball git-soc" rel="noopener" target="_blank">
    <img
    src="/images/icons8-twitter-30.png" alt="github"> </a>`;

document.querySelector(".ball").addEventListener("animationend", (e) => {
  e.target.querySelector("p").innerHTML = headerSocials;
  e.target.classList.replace("ball", "expand");
  onDarkMode(onToggleGitSrc);
});

const toggleSwitch = document.querySelector('input[type="checkbox"]');

const switchTheme = (e) => {
  const gitSoc = document.querySelector(".git-soc");
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark-theme");
    document.documentElement.classList.add("dark");
    gitSoc.src = "/images/icons8-github-white.png";
  } else {
    document.documentElement.setAttribute("data-theme", "light-theme");
    document.documentElement.classList.remove("dark");
    gitSoc.src = "/images/icons8-github-30.png";
  }
};

toggleSwitch.addEventListener("change", switchTheme);

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const isDarkMode = e.matches;
    document.querySelector('input[type="checkbox"]').checked = isDarkMode;
    onDarkMode(onToggleGitSrc);
  });

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.querySelector('input[type="checkbox"]').checked = true;
  onDarkMode(onToggleGitSrc);
}
