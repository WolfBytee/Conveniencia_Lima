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

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.querySelector(".menu");
  const nav = document.querySelector("nav");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuToggle.classList.toggle("active");
    nav.classList.toggle("active");
  });
});

const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const menuLinks = document.querySelectorAll("nav ul li a"); // Seleciona todos os links do menu
const navList = document.querySelector("nav ul"); // A lista de navegação

function positionToggleBelowMenu() {
  if (menuToggle.classList.contains("active")) {
    const lastItem = navList.lastElementChild; // Último item da lista
    const lastItemRect = lastItem.getBoundingClientRect(); // Dimensões e posição do último item
    const newTop = lastItemRect.bottom + 20; // 20px abaixo do último item
    menuToggle.style.top = `${newTop}px`; // Atualiza a posição do botão
    menuToggle.style.left = "50%"; // Centraliza horizontalmente
    menuToggle.style.transform = "translateX(-50%)"; // Ajusta para o centro
  } else {
    menuToggle.style.top = ""; // Reseta o estilo quando inativo
    menuToggle.style.left = "";
    menuToggle.style.transform = "";
  }
}

// Alterna o menu ao clicar no botão de alternância
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
  positionToggleBelowMenu(); // Recalcula a posição ao abrir/fechar
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    menuToggle.classList.remove("active");
    nav.classList.remove("active");
    positionToggleBelowMenu(); // Recalcula a posição ao fechar
  });
});

window.addEventListener("resize", () => {
  if (menuToggle.classList.contains("active")) {
    positionToggleBelowMenu();
  }
});
