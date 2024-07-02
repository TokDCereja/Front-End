const $registrarForm = document.querySelector("form.registrarForm");
console.log($registrarForm);

const $entrarForm = document.querySelector("form.entrarForm");
console.log($entrarForm);

$registrarForm.addEventListener(
  "submit",
  function criaController(infosDoEvento) {
    //Negando o reset da pagina apos o click no botao "salvar"
    infosDoEvento.preventDefault();

    //Armazenando os dados dos campos do form
    const $nome = document.querySelector('input[name="name"]');
    const $email = document.querySelector('input[name="email"]');
    const $emailNovamente = document.querySelector('input[name="emailAgain"]');
    const $senha = document.querySelector('input[name="password"]');
    const $senhaNovamente = document.querySelector(
      'input[name="passwordAgain"]'
    );
    if (
      $email.value != $emailNovamente.value ||
      $senha.value != $senhaNovamente.value
    ) {
      alert("os campos de email ou de senhas precisam ser iguais");
      console.log("usuário não registrado");
      //Resetando os Inputs
      $email.value = "";
      $emailNovamente.value = "";
      $senha.value = "";
      $senhaNovamente.value = "";
    } else {
      const $salvaEmail = $email.value;
      const $salvaSenha = $senha.value;

      console.log("usuário registrado");
      console.log("email:" + $salvaEmail);
      console.log("senha:" + $salvaSenha);

      //Resetando os Inputs
      $nome.value = "";
      $email.value = "";
      $emailNovamente.value = "";
      $senha.value = "";
      $senhaNovamente.value = "";

      $entrarForm.addEventListener(
        "submit",
        function criaController(infosDoEvento) {
          //Negando o reset da pagina apos o click no botao "salvar"
          infosDoEvento.preventDefault();

          //Armazenando os dados dos campos do form
          const $emailLogin = document.querySelector(
            'input[name="emailLogin"]'
          );
          const $senhaLogin = document.querySelector(
            'input[name="passwordLogin"]'
          );

          if (
            $emailLogin.value == $salvaEmail &&
            $senhaLogin.value == $salvaSenha
          ) {
            console.log("permissão concedida");
            $emailLogin.value = "";
            $senhaLogin.value = "";
            location.href = "/home/home.html";
          } else {
            alert("email ou senha errada");
            console.log("email ou senha errada");
            console.log("email utilizado: " + $emailLogin.value);
            console.log("senha utilizada: " + $senhaLogin.value);
            $emailLogin.value = "";
            $senhaLogin.value = "";
          }
        }
      );
    }
  }
);
