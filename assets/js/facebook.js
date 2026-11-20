// Page Facebook : chargée uniquement après clic (aucun contenu tiers avant l'accord du visiteur)
(function () {
  var box = document.querySelector("[data-facebook]");
  if (!box) return;
  box.querySelector("button").addEventListener("click", function () {
    var f = document.createElement("iframe");
    f.src = "https://www.facebook.com/plugins/page.php?href=" + encodeURIComponent(box.dataset.url) +
      "&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true";
    f.title = "Page Facebook de Trait Argonne Traiteur";
    f.loading = "lazy";
    f.setAttribute("allow", "encrypted-media");
    box.replaceChildren(f);
    box.classList.add("fb-box--loaded");
  });
})();
