// Carrousel à défilement automatique : <div data-carousel data-interval="4000">
(function () {
  document.querySelectorAll("[data-carousel]").forEach(function (root) {
    var track = root.querySelector(".carousel__track"),
      dotsBox = root.querySelector(".carousel__dots");
    var n = track.children.length,
      index = 0,
      timer,
      delay = +root.dataset.interval || 3000;
    function go(i) {
      index = (i + n) % n;
      track.style.transform = "translateX(-" + index * 100 + "%)";
      Array.prototype.forEach.call(dotsBox.children, function (d, k) {
        d.setAttribute("aria-current", k === index);
      });
    }
    function start() {
      stop();
      timer = setInterval(function () {
        go(index + 1);
      }, delay);
    }
    function stop() {
      clearInterval(timer);
    }
    for (var k = 0; k < n; k++) {
      (function (k) {
        var b = document.createElement("button");
        b.setAttribute("aria-label", "Photo " + (k + 1));
        b.addEventListener("click", function () {
          go(k);
          start();
        });
        dotsBox.appendChild(b);
      })(k);
    }
    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    go(0);
    start();
  });
})();
