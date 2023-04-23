// Ativar links do menu principal
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  if (window.location.href.includes(link.href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar itens do orçamento
const parametros = new URLSearchParams(window.location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);
