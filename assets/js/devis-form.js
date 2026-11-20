// Formulaire de devis : pré-sélection du type (?type=...) et envoi simulé
(function () {
  var form = document.getElementById("devis-form");
  if (!form) return;
  var type = new URLSearchParams(location.search).get("type");
  if (type) form.elements["type"].value = type;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // À remplacer par l'envoi réel (service d'emailing ou script serveur)
    document.getElementById("form-status").textContent = "Maquette : demande non envoyée.";
  });
})();
