// Menu mobile
(function () {
  var burger = document.querySelector(".burger"), nav = document.getElementById("nav");
  if (!burger || !nav) return;
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
})();
