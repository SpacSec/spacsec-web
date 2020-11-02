const toast = document.querySelector(".toast");

if (typeof toast != "undefined" && toast != null) {
  toast.addEventListener("click", function () {
    console.log("hello");
    toast.style.opacity = "0";
  });
  setTimeout(function () {
    toast.style.opacity = "0";
    setTimeout(function () {
      toast.style.display = "none";
    }, 200);
  }, 6000);
}
