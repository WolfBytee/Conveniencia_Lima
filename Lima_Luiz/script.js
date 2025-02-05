document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  function changeActiveSection() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("ativo");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("ativo");
      }
    });
  }

  window.addEventListener("scroll", changeActiveSection);
});

function toggleMenu() {
  var nav = document.getElementById("nav-menu");
  nav.classList.toggle("active");
}
