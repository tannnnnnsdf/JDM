document.addEventListener("DOMContentLoaded", () => {

  fetch("partials/header.html")
    .then(res => res.text())
    .then(html => {
      const el = document.getElementById("header");
      if (el) el.innerHTML = html;
    });

  fetch("partials/footer.html")
    .then(res => res.text())
    .then(html => {
      const el = document.getElementById("footer");
      if (el) el.innerHTML = html;
    });

});
