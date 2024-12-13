const menuHamburger = document.getElementById("menuHamburger");
const menu = document.getElementById("menu");

// Abrir/fechar o menu ao clicar no hambúrguer
menuHamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Fechar o menu ao clicar fora dele
window.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && e.target !== menuHamburger) {
    menu.classList.remove("open");
  }
});
