document.querySelector(".ball").addEventListener(
  "animationend",
  function(e) {
    e.target.firstChild.innerText = "GitHub";
    e.target.classList.replace("ball", "expand");
  },
  false
);

const toggleSwitch = document.querySelector(
  'input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark-theme");
  } else {
    document.documentElement.setAttribute("data-theme", "light-theme");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
