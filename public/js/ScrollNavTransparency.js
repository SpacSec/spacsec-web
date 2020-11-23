const nav = document.getElementById("nav");
const navToggler = document.querySelector(".navbar-toggler");
// const bar = document.querySelectorAll(".navbar-link");
window.onscroll = function () {
  "use strict";
  if (
    document.body.scrollTop >= 64 ||
    document.documentElement.scrollTop >= 64
  ) {
    document.querySelectorAll(".navbar-link").forEach((el) => {
      el.style.color = "#000";
    });
    document.querySelector(".fa-bars").style.color = "#000";
    nav.classList.add("navbar-color");
  } else {
    document.querySelectorAll(".navbar-link").forEach((el) => {
      el.style.color = "#fff";
    });
    document.querySelector(".fa-bars").style.color = "#fff";
    nav.classList.remove("navbar-color");
  }
};

// For responsive nav toggler
const colorBackground = () => {
  document.querySelector(".fa-bars").style.color = "#000";
  document.querySelectorAll(".navbar-link").forEach((el) => {
    el.style.color = "#000";
  });
  if (!nav.classList.contains("navbar-color")) {
    nav.classList.toggle("navbar-color");
  }
};

navToggler.addEventListener("click", colorBackground);
