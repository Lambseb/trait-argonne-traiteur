// Apparition progressive au défilement (texte et images)
(function () {
  var SELECTOR = ".section__head, .split > *, .grid > *, .gallery > *, .banner .container > *, .note, .legal, .form";
  var els = document.querySelectorAll(SELECTOR);
  function show(el) { el.classList.add("is-visible"); }
  els.forEach(function (el) {
    el.classList.add("reveal");
    // Décalage progressif entre éléments d'une même grille
    var i = Array.prototype.indexOf.call(el.parentNode.children, el);
    if (el.parentNode.matches(".grid, .gallery, .split, .container")) el.style.setProperty("--d", Math.min(i, 5) * 90 + "ms");
  });
  if (!("IntersectionObserver" in window)) { els.forEach(show); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { show(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach(function (el) { io.observe(el); });
})();
