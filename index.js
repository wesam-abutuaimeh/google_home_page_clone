"use-strict";
const appsMenuIcon = document.getElementById("google-apps-menu-icon");
const appsMenu = document.querySelector(".google-apps-menu");

appsMenuIcon.addEventListener("click", (e) => {
  appsMenu.classList.toggle("active");
});
window.addEventListener("click", (e) => {
  if (!appsMenu.contains(e.target) && !appsMenuIcon.contains(e.target)) {
    appsMenu.classList.remove("active");
  }
});

function toggleTheme() {
  const htmlTag = document.getElementsByTagName("html")[0];
  if (htmlTag.hasAttribute("data-theme")) {
    htmlTag.removeAttribute("data-theme");
  } else {
    htmlTag.setAttribute("data-theme", "light");
    document.querySelector(".google-logo").style.cssText = "background-image: url('https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'); background-repeat: no-repeat; background-color:#fff;";
  }
  document.querySelector(".google-logo").style.cssText = "background-image: url('/imgs/google_logo.svg'); background-repeat: no-repeat; background-color:#fff;";  
}
