//Base de dados
const tabelaIngrediente = {
  usuario: [
    {
      username: "usuario1",
    },
  ],
  //Armazenamento os dados dos ingredientes
  ingredientes: [
    {
      id: Date.now(),
      ingrediente: "Leite",
      quantAtual: 10,
      quantMax: 10,
      quantMin: 10,
      medida: "l",
    },
  ],

  readIngrediente() {
    tabelaIngrediente.ingredientes.forEach(
      ({ id, ingrediente, quantAtual, quantMax, quantMin, medida }) => {
        tabelaIngrediente.criaIngrediente(
          {
            id,
            ingrediente: ingrediente,
            quantAtual: quantAtual,
            quantMax: quantMax,
            quantMin: quantMin,
            medida: medida,
          },
          true
        );
      }
    );
  },

  criaIngrediente(dados, htmlOnly = false) {
    const idInterno = Date.now();
    if (!htmlOnly) {
      //Cria Ingrediente na Memória (Array/Objeto)
      tabelaIngrediente.ingredientes.push({
        id: dados.id || idInterno,
        ingrediente: dados.ingrediente,
        quantAtual: dados.quantAtual,
        quantMax: dados.quantMax,
        quantMin: dados.quantMin,
        medida: dados.medida,
      });
    }

    //Cria Ingrediente no HTML
    const $listaIngrediente = document.querySelector(".listaIngrediente");

    //Criando as linhas da Tabela
    $listaIngrediente.insertAdjacentHTML(
      "afterbegin",
      `
    <li data-id="${idInterno}" class="ingrediente"> 
    <input type="checkbox" name="deletar" id="deletar" class="checkDelete">
    <input type="text" value="${dados.ingrediente}">
    <input type="number" value="${dados.quantAtual}">
    <input type="number" value="${dados.quantMax}">
    <input type="number" value="${dados.quantMin}">
    <select name="medida" id="medida">
      <option name="${dados.medida}" value="${dados.medida}">${dados.medida}</option>
      <option name="und" value="und">und</option>
      <option name="g" value="g">g</option>
      <option name="kg" value="kg">kg</option>
      <option name="ml" value="ml">ml</option>
      <option name="l" value="l">l</option>
    </select>
    </li>
`
    );
  },

  //Apagando as linhas da Tabela
  apagaIngrediente(id) {
    const listaIngredienteAtualizada = tabelaIngrediente.ingredientes.filter(
      (elementoAtual) => {
        return elementoAtual.id !== Number(id);
      }
    );
    tabelaIngrediente.ingredientes = listaIngredienteAtualizada;
  },
};

console.log(tabelaIngrediente.ingredientes);

const $form = document.querySelector("form");
console.log($form);

//CRUD [CREATE]
$form.addEventListener("submit", function criaPostController(infosDoEvento) {
  //Negando o reset da pagina apos o click no botao "salvar"
  infosDoEvento.preventDefault();

  //Armazenando os dados dos campos do form
  const $campoIngrediente = document.querySelector(
    'input[name="campoIngrediente"]'
  );
  const $quantAtual = document.querySelector('input[name="quantAtual"]');
  const $quantMax = document.querySelector('input[name="quantMax"]');
  const $quantMin = document.querySelector('input[name="quantMin"]');
  const $medida = document.querySelector("select");

  console.log("ingrendiente salvo");

  tabelaIngrediente.criaIngrediente({
    ingrediente: $campoIngrediente.value,
    quantAtual: Number($quantAtual.value),
    quantMax: Number($quantMax.value),
    quantMin: Number($quantMin.value),
    medida: $medida.value,
  });

  //Resetando os Inputs
  $campoIngrediente.value = "";
  $quantAtual.value = "";
  $quantMax.value = "";
  $quantMin.value = "";
  $medida.value = "und";
});

//CRUD [READ]
tabelaIngrediente.readIngrediente();

//CRUD [DELETE]
document
  .querySelector(".listaIngrediente")
  .addEventListener("click", function (infosDoEvento) {
    console.log("houve um check!", infosDoEvento.target);
    const elementoAtual = infosDoEvento.target;
    const isCheckDeleteClick =
      infosDoEvento.target.classList.contains("checkDelete");

    if (isCheckDeleteClick) {
      console.log("houve um check no checkbox de apagar");
      const id = elementoAtual.parentNode.getAttribute("data-id");

      // Manipula o lado do Banco de Dados
      tabelaIngrediente.apagaIngrediente(id);

      //Manipula o lado do HTML
      elementoAtual.parentNode.remove();
    }
  });

//CRUD [UPDATE]
document
  .querySelector(".listaIngrediente")
  .addEventListener("input", function (infosDoEvento) {
    console.log("Houve uma alteração");
    const elementoAtual = infosDoEvento.target;
    const id = elementoAtual.parentNode.getAttribute("data-id");
    console.log("Id: " + id);
    console.log("Valor: " + elementoAtual.value);
  });
