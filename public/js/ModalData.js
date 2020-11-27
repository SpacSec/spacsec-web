const closeBtn = document.getElementById("speaker-close");
const knowBtns = document.querySelectorAll(".know-more-btn");

knowBtns.forEach((knowBtn, index) => {
  knowBtn.addEventListener("click", () => {
    document.getElementById("modelContent").innerHTML = speakers[index].details;

    document.getElementById("staticBackdropLabel1").innerHTML =
      speakers[index].name;
    document.getElementById("speaker-linkedin").href = speakers[index].linkedin;
  });
});

closeBtn.addEventListener("click", () => {
  document.getElementById("modelContent").innerHTML = "";
  document.getElementById("staticBackdropLabel1").innerHTML = "";
});
