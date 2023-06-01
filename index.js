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
