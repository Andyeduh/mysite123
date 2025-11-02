document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const menuList = document.getElementById("menu-list");

  // Garante que o botão e o menu existem
  if (!menuBtn || !menuList) return;

  // Adiciona as logos no fim do menu (só uma vez)
  if (!document.getElementById("logos-menu")) {
    const logos = document.createElement("div");
    logos.id = "logos-menu";
    logos.innerHTML = `
      <img src="https://files.catbox.moe/l556xu.png" alt="Instituto Imaginário" style="width:100px;display:block;margin:15px auto;">
      <img src="https://files.catbox.moe/wcdm5l.png" alt="Secretaria de Juventude" style="width:100px;display:block;margin:10px auto 0;">
    `;
    menuList.appendChild(logos);
  }

  // Abre e fecha o menu
  menuBtn.addEventListener("click", function () {
    menuList.classList.toggle("show");
  });
});
// ANIMAÇÃO DE ENTRADA DO SITE
window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});

// ANIMAÇÃO SUAVE DOS ELEMENTOS AO ROLAR
const animar = document.querySelectorAll("[data-animar]");

function animarScroll() {
  const topoTela = window.scrollY + window.innerHeight * 0.85;

  animar.forEach((elemento) => {
    if (topoTela > elemento.offsetTop) {
      elemento.classList.add("animado");
    }
  });
}

window.addEventListener("scroll", animarScroll);
animarScroll();