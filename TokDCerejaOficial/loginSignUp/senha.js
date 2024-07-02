const tela = document.getElementById("esqueciSenha");
const senha1 = document.getElementById("senha1");
const senha2 = document.getElementById("senha2");
const senha3 = document.getElementById("senha3");
const senha4 = document.getElementById("senha4");
const senha5 = document.getElementById("senha5");

const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const botao3 = document.getElementById("botao3");
const botao4 = document.getElementById("botao4");
const botao5 = document.getElementById("botao5");

const esqueciSenha = document.getElementById("senha");

botao1.addEventListener("click", function () {
  senha1.classList.add("hidden");
  senha2.classList.remove("hidden");
});

botao2.addEventListener("click", function () {
  senha2.classList.add("hidden");
  senha3.classList.remove("hidden");
});

botao3.addEventListener("click", function () {
  senha3.classList.add("hidden");
  senha4.classList.remove("hidden");
});

botao4.addEventListener("click", function () {
  senha4.classList.add("hidden");
  senha5.classList.remove("hidden");
});

botao5.addEventListener("click", function () {
  senha5.classList.add("hidden");
  tela.style.display = "none";
});

esqueciSenha.addEventListener("click", function () {
  tela.style.display = "flex";
  senha1.classList.remove("hidden");
});

