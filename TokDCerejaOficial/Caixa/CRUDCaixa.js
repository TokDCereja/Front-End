//Base de Dados
const tabelasCaixa = {
  custoFixo: [
    {
      id: 0,
      custo: "Conta de Água",
      valor: 0.0,
    },
  ],

  custoUnd: [
    {
      id: 0,
      produto: "Pão de Mel",
      valor: 10.0,
    },
  ],

  totalVenda: [
    {
      id: 0,
      produto: "Pão de Mel",
      quant: 100.0,
      valor: 1000.0,
    },
  ],

  //Criando elemento do Custo Fixo
  criaCustoFixo(dados, htmlOnly = false) {
    const idInterno = Date.now();
    if (!htmlOnly) {
      //Cria elemento na Memória (Array/Objeto)
      tabelasCaixa.custoFixo.push({
        id: dados.id || idInterno,
        custo: dados.custo,
        valor: dados.valor,
      });
    }

    //Cria elemento Custo Fixo no HTML
    const $listaCustoFixo = document.querySelector(".listaCustoFixo");

    $listaCustoFixo.insertAdjacentHTML(
      "afterbegin",
      `
      <li data-id="${idInterno}" class="elemento">
      <input type="checkbox" name="deletar" id="deletar" class="checkDelete">
      <input type="text" value="${dados.custo}">
      <div>
      <p>R$</p>
      <input type="number" value="${dados.valor}">
      </div>
      </li>
      `
    );
  },

  //Lendo o elemento do Custo Fixo
  readCustoFixo() {
    tabelasCaixa.custoFixo.forEach(({ id, custo, valor }) => {
      tabelasCaixa.criaCustoFixo(
        {
          id,
          custo: custo,
          valor: valor,
        },
        true
      );
    });
  },

  //Atualizando o elemento do Custo Fixo
  atualizaContentCustoFixo(id, novoConteudo) {
    const dadoQueSeraAtualizado = tabelasCaixa.custoFixo.find((post) => {
      return post.id === Number(id);
    });
    console.log(dadoQueSeraAtualizado);
    dadoQueSeraAtualizado.custo = novoConteudo;
  },

  //Deletando o elemento do Custo Fixo
  apagaCustoFixo(id) {
    const listaCustoFixoAtualizada = tabelasCaixa.custoFixo.filter(
      (elementoAtual) => {
        return elementoAtual.id !== Number(id);
      }
    );
    tabelasCaixa.custoFixo = listaCustoFixoAtualizada;
  },

  //------------------------------------------------------------------------------//

  //Criando elemento do Custo Unidade
  criaCustoUnd(dados, htmlOnly = false) {
    const idInterno = Date.now();
    if (!htmlOnly) {
      //Cria elemento na Memória (Array/Objeto)
      tabelasCaixa.custoUnd.push({
        id: dados.id || idInterno,
        produto: dados.produto,
        valor: dados.valor,
      });
    }

    //Cria elemento Custo Fixo no HTML
    const $listaCustoUnd = document.querySelector(".listaCustoUnd");

    $listaCustoUnd.insertAdjacentHTML(
      "afterbegin",
      `
      <li data-id="${idInterno}" class="elemento">
      <input type="checkbox" name="deletar" id="deletar" class="checkDelete">
      <input type="text" value="${dados.produto}">
      <div>
      <p>R$</p>
      <input type="number" value="${dados.valor}">
      </div>
      </li>
      `
    );
  },

  //Lendo o elemento do Custo Unidade
  readCustoUnidade() {
    tabelasCaixa.custoUnd.forEach(({ id, produto, valor }) => {
      tabelasCaixa.criaCustoUnd(
        {
          id,
          produto: produto,
          valor: valor,
        },
        true
      );
    });
  },

  //Atualizando o elemento do Custo Unidade
  atualizaContentCustoUnd(id, novoConteudo) {
    const dadoQueSeraAtualizado = tabelasCaixa.custoUnd.find((post) => {
      return post.id === Number(id);
    });
    console.log(dadoQueSeraAtualizado);
    dadoQueSeraAtualizado.produto = novoConteudo;
  },

  //Deletando o elemento do Custo Unidade
  apagaCustoUnd(id) {
    const listaCustoUndAtualizada = tabelasCaixa.custoUnd.filter(
      (elementoAtual) => {
        return elementoAtual.id !== Number(id);
      }
    );
    tabelasCaixa.custoUnd = listaCustoUndAtualizada;
  },
  //------------------------------------------------------------------------------//

  //Criando elemento do Total Venda
  criaTotalVenda(dado, htmlOnly = false) {
    const idInterno = Date.now();
    if (!htmlOnly) {
      //Cria elemento na Memória (Array/Objeto)
      tabelasCaixa.totalVenda.push({
        id: dado.id || idInterno,
        produto: dado.produto,
        quant: dado.quant,
        valor: dado.valor,
      });
    }

    //Cria elemento Custo Fixo no HTML
    const $listaTotalVenda = document.querySelector(".listaTotalVenda");

    $listaTotalVenda.insertAdjacentHTML(
      "afterbegin",
      `
      <li data-id="${idInterno}" class="elemento">
      <input type="checkbox" name="deletar" id="deletar" class="checkDelete">
      <input type="text" value="${dado.produto}">
       <div>
      <input type="number" value="${dado.quant}">
      
      <div>
      <p>R$</p>
      <input type="number" value="${dado.valor}">
      </div>
      </li>
      `
    );
  },

  //Lendo o elemento do Total Venda
  readTotalVenda() {
    tabelasCaixa.totalVenda.forEach(({ id, produto, quant, valor }) => {
      tabelasCaixa.criaTotalVenda(
        {
          id,
          produto: produto,
          quant: quant,
          valor: valor,
        },
        true
      );
    });
  },

  //Atualizando o elemento do Total Venda
  atualizaContentTotalVenda(id, novoConteudo) {
    const dadoQueSeraAtualizado = tabelasCaixa.totalVenda.find((post) => {
      return post.id === Number(id);
    });
    console.log(dadoQueSeraAtualizado);
    dadoQueSeraAtualizado.produto = novoConteudo;
  },

  //Deletando o elemento do Custo Unidade
  apagaTotalVenda(id) {
    const listaTotalVendaAtualizada = tabelasCaixa.totalVenda.filter(
      (elementoAtual) => {
        return elementoAtual.id !== Number(id);
      }
    );
    tabelasCaixa.totalVenda = listaTotalVendaAtualizada;
  },
};

console.log(tabelasCaixa);

// CRUD [CREATE] Custo Fixo
$formCustoFixo = document.querySelector("form.custoFixo.form");
console.log($formCustoFixo);

$formCustoFixo.addEventListener(
  "submit",
  function criaPostController(infosDoEvento) {
    //Negando o reset da pagina apos o click no botao "salvar"
    infosDoEvento.preventDefault();

    //Armazenando os dados dos campos do form
    const $campoCustoFixo = document.querySelector('input[name="nomeFixo"]');
    const $campoValorCustoFixo = document.querySelector(
      'input[name="valorFixo"]'
    );

    console.log("custo salvo");

    tabelasCaixa.criaCustoFixo({
      custo: $campoCustoFixo.value,
      valor: Number($campoValorCustoFixo.value),
    });

    //Resetando os Inputs
    $campoCustoFixo.value = "";
    $campoValorCustoFixo.value = "";
  }
);

// CRUD [READ] Custo Fixo
tabelasCaixa.readCustoFixo();

//CRUD [UPDATE] Custo Fixo
document
  .querySelector(".listaCustoFixo")
  .addEventListener("input", function (infosDoEvento) {
    console.log("Houve uma alteração");
    const elementoAtual = infosDoEvento.target;
    const id = elementoAtual.parentNode.getAttribute("data-id");
    tabelasCaixa.atualizaContentCustoFixo(id, elementoAtual.value);
  });

//CRUD [DELETE] Custo Fixo
document
  .querySelector(".listaCustoFixo")
  .addEventListener("click", function (infosDoEvento) {
    console.log("houve um check!", infosDoEvento.target);
    const elementoAtual = infosDoEvento.target;
    const isCheckDeleteClick =
      infosDoEvento.target.classList.contains("checkDelete");

    if (isCheckDeleteClick) {
      console.log("houve um check no checkbox de apagar");
      const id = elementoAtual.parentNode.getAttribute("data-id");

      // Manipula o lado do Banco de Dados
      tabelasCaixa.apagaCustoFixo(id);

      //Manipula o lado do HTML
      elementoAtual.parentNode.remove();
    }
  });

/*------------------------------------------------------------------------*/
// CRUD [CREATE] Custo Unidade
$formCustoUnd = document.querySelector("form.custoUnd.form");
console.log($formCustoUnd);

$formCustoUnd.addEventListener(
  "submit",
  function criaPostController(infosDoEvento) {
    //Negando o reset da pagina apos o click no botao "salvar"
    infosDoEvento.preventDefault();

    //Armazenando os dados dos campos do form
    const $campoCustoUnd = document.querySelector('input[name="nomeUnd"]');
    const $campoValorCustoUnd = document.querySelector(
      'input[name="valorUnd"]'
    );

    console.log("custo salvo");

    tabelasCaixa.criaCustoUnd({
      produto: $campoCustoUnd.value,
      valor: Number($campoValorCustoUnd.value),
    });

    //Resetando os Inputs
    $campoCustoUnd.value = "";
    $campoValorCustoUnd.value = "";
  }
);

// CRUD [READ] Custo Unidade
tabelasCaixa.readCustoUnidade();

//CRUD [UPDATE] Custo Unidade
document
  .querySelector(".listaCustoUnd")
  .addEventListener("input", function (infosDoEvento) {
    console.log("Houve uma alteração");
    const elementoAtual = infosDoEvento.target;
    const id = elementoAtual.parentNode.getAttribute("data-id");
    tabelasCaixa.atualizaContentCustoUnd(id, elementoAtual.value);
  });

//CRUD [DELETE] Custo Unidade
document
  .querySelector(".listaCustoUnd")
  .addEventListener("click", function (infosDoEvento) {
    console.log("houve um check!", infosDoEvento.target);
    const elementoAtual = infosDoEvento.target;
    const isCheckDeleteClick =
      infosDoEvento.target.classList.contains("checkDelete");

    if (isCheckDeleteClick) {
      console.log("houve um check no checkbox de apagar");
      const id = elementoAtual.parentNode.getAttribute("data-id");

      // Manipula o lado do Banco de Dados
      tabelasCaixa.apagaCustoUnd(id);

      //Manipula o lado do HTML
      elementoAtual.parentNode.remove();
    }
  });
/*------------------------------------------------------------------------*/
// CRUD [CREATE] Total Venda
$formTotalVenda = document.querySelector("form.totalVenda.form");
console.log($formTotalVenda);

$formTotalVenda.addEventListener(
  "submit",
  function criaPostController(infosDoEvento) {
    //Negando o reset da pagina apos o click no botao "salvar"
    infosDoEvento.preventDefault();

    //Armazenando os dados dos campos do form
    const $campoTotalProduto = document.querySelector(
      'input[name="totalProduto"]'
    );
    const $campoQuantTotalProduto = document.querySelector(
      'input[name="quantProduto"]'
    );
    const $campoValorTotalProduto = document.querySelector(
      'input[name="valorProd"]'
    );

    console.log("custo salvo");

    tabelasCaixa.criaTotalVenda({
      produto: $campoTotalProduto.value,
      quant: Number($campoQuantTotalProduto.value),
      valor: Number($campoValorTotalProduto.value),
    });

    //Resetando os Inputs
    $campoTotalProduto.value = "";
    $campoQuantTotalProduto.value = "";
    $campoValorTotalProduto.value = "";
  }
);

// CRUD [READ] Total Venda
tabelasCaixa.readTotalVenda();

//CRUD [UPDATE] Total Venda
document
  .querySelector(".listaTotalVenda")
  .addEventListener("input", function (infosDoEvento) {
    console.log("Houve uma alteração");
    const elementoAtual = infosDoEvento.target;
    const id = elementoAtual.parentNode.getAttribute("data-id");
    tabelasCaixa.atualizaContentTotalVenda(id, elementoAtual.value);
  });

//CRUD [DELETE] Total Venda
document
  .querySelector(".listaTotalVenda")
  .addEventListener("click", function (infosDoEvento) {
    console.log("houve um check!", infosDoEvento.target);
    const elementoAtual = infosDoEvento.target;
    const isCheckDeleteClick =
      infosDoEvento.target.classList.contains("checkDelete");

    if (isCheckDeleteClick) {
      console.log("houve um check no checkbox de apagar");
      const id = elementoAtual.parentNode.getAttribute("data-id");

      // Manipula o lado do Banco de Dados
      tabelasCaixa.apagaTotalVenda(id);

      //Manipula o lado do HTML
      elementoAtual.parentNode.remove();
    }
  });
