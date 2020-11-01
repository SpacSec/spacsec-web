const nav = document.getElementById("nav");
const navToggler = document.querySelector(".navbar-toggler");

window.onscroll = function () {
  "use strict";
    if (
      document.body.scrollTop >= 64 ||
      document.documentElement.scrollTop >= 64
    ) {
      nav.classList.add("navbar-color");
    } else {
      nav.classList.remove("navbar-color");
    }
};

// For responsive nav toggler
const colorBackground = () => {
  if (!(nav.classList.contains("navbar-color"))) {
    nav.classList.toggle("navbar-color");
  }
  console.log("test");
};

navToggler.addEventListener("click", colorBackground);
