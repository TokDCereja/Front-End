const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const registerConta = document.getElementById("registerConta");
const loginConta = document.getElementById("loginConta");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

registerConta.addEventListener("click", () => {
  container.classList.add("active");
});

loginConta.addEventListener("click", () => {
  container.classList.remove("active");
});
