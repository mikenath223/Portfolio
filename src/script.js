    document.querySelector('.ball').addEventListener('animationend', function (e) {
      e.target.firstChild.innerText = "GitHub";
      e.target.classList.replace("ball", "expand");
    }, false);
