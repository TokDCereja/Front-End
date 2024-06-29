const botao = document.getElementById("translate");
const conteudo = document.getElementById("conteudo");
botao.addEventListener("click", () => {
  conteudo.classList.toggle("conteudoTradutor");
});
