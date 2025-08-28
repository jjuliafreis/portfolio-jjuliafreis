// Adiciona a classe .loaded ao body após o carregamento da página
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

const nav = document.querySelector('nav');
const menuToggle = nav.querySelector('#menu-toggle');
const menuIcon = nav.querySelector('.menu-icon');
const menuLinks = nav.querySelectorAll('.menu a');
const menu = nav.querySelector('.menu');

// Fecha o menu ao clicar em um link
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.checked = false;
  });
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (e) => {
  const target = e.target;

  // Se o clique não for no menu, nem no ícone, nem no checkbox
  if (!menu.contains(target) && !menuIcon.contains(target) && target !== menuToggle) {
    menuToggle.checked = false;
  }
});






// Inicializa animações do ScrollReveal
import { initScrollReveal } from "./scrollreveal.js";
initScrollReveal();

// Scroll suave ao clicar nos links do menu (para IDs internos)
document.querySelectorAll("header nav ul li a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    // Se for um link âncora interna (começa com #), aplica scroll suave
    if (targetId.startsWith("#")) {
      e.preventDefault();

      const target = document.querySelector(targetId);

      if (target) {
        const header = document.querySelector("header");
        const headerHeight = header.offsetHeight;

        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY - headerHeight;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;

        let startTime = null;
        const duration = 1000;

        function animation(currentTime) {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;

          const t = timeElapsed / duration;
          const ease =
            t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

          window.scrollTo(0, startPosition + distance * ease);

          if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        requestAnimationFrame(animation);
      }
    }
  });
});

// Adiciona a classe .active ao link da página atual
const links = document.querySelectorAll("nav ul li a");
const currentPath = window.location.pathname.split("/").pop();

links.forEach((link) => {
  const linkPath = link.getAttribute("href").split("/").pop(); // pega só o arquivo
  if (linkPath === currentPath) {
    link.classList.add("active");
  }
});

