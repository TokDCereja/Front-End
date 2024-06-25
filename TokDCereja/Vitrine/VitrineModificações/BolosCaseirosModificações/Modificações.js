document.addEventListener('DOMContentLoaded', function() {
    const campoTexto = document.getElementById('campoTexto');
    const botaoEditar = document.getElementById('editarTexto');
    const botaoSalvar = document.getElementById('Salvar');
    const botaoAdicionar = document.getElementById('botaoAdicionar');
    const nomeProdutoInput = document.getElementById('nomeProduto');
    const produtosContainer = document.querySelector('.produtos');
    const produtoNovoContainer = document.querySelector('.produtoNovo');
    const addPictureButton = document.getElementById("addPictureButton");
    const pictureContainer = document.getElementById("pictureContainer");

    // Editar Texto//
    botaoEditar.addEventListener('click', function() {
        campoTexto.contentEditable = true;
        campoTexto.focus();
    });

    botaoSalvar.addEventListener('click', function() {
        const novoTexto = campoTexto.innerText;
        console.log('Novo texto:', novoTexto);
        
        campoTexto.contentEditable = false; 
    });

    //Adicionando um Produto//
    botaoAdicionar.addEventListener('click', function() {
        const novoNomeProduto = nomeProdutoInput.value.trim();

        if (novoNomeProduto === '') {
            alert('Por favor, digite um nome para o produto.');
            return;
        }

        const novoNumeroProduto = document.querySelectorAll('.produto').length + 1;

        const novoProduto = document.createElement("div");
        novoProduto.classList.add("produto", `produto${novoNumeroProduto}`);
        novoProduto.innerHTML = `
            <button>${novoNomeProduto}</button>
            <button class="excluirProduto"><i class="fas fa-times"></i></button>
        `;

        // Excluir o Produto //
        novoProduto.querySelector('.excluirProduto').addEventListener('click', function() {
            novoProduto.remove();
            verificarExibicaoProdutoNovo();
        });

        produtosContainer.appendChild(novoProduto);
        nomeProdutoInput.value = '';
        adicionarEventoExcluirProduto(novoProduto);
        verificarExibicaoProdutoNovo();
    });

    // Função de excluir os produtos fixos e add//
    function adicionarEventoExcluirProduto(produto) {
        produto.querySelector('.excluirProduto').addEventListener('click', function() {
            produto.remove();
            verificarExibicaoProdutoNovo();
        });
    }

    function verificarExibicaoProdutoNovo() {
        const produtosExistentes = document.querySelectorAll('.produto');
        
        if (produtosExistentes.length === 0) {
            produtoNovoContainer.style.display = 'flex'; 
        } else {
            produtoNovoContainer.style.display = 'block';
        }
    }

    // Função de add uma imagem clicando no botão add imagem//
    addPictureButton.addEventListener("click", function () {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.style.display = "none";
        input.addEventListener("change", handleFileSelect);
        pictureContainer.appendChild(input);
        input.click();
    });

    //  adicionando imagens dinamicamente//
    function handleFileSelect(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const img = new Image();
                img.src = event.target.result;
                img.classList.add("picture");

                const deleteButton = document.createElement("button");
                deleteButton.innerHTML = "<i class='fas fa-times'></i>"; 
                deleteButton.classList.add("delete-button");
                deleteButton.addEventListener("click", function () {
                    pictureDiv.remove(); 
                    ajustarAlturaFundo();
                });

                const pictureDiv = document.createElement("div");
                pictureDiv.classList.add("picture");
                pictureDiv.appendChild(img);
                pictureDiv.appendChild(deleteButton);
                pictureContainer.appendChild(pictureDiv);

                ajustarAlturaFundo(); 
            };
            reader.readAsDataURL(file);
        }
        event.target.remove();
    }

    //Excluir imagens add//
    pictureContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-button')) {
            event.target.parentNode.remove();
            ajustarAlturaFundo(); 
        }
    });

    // Ele exclui as imagens já fixadas//
    document.querySelectorAll('.delete-button').forEach(deleteButton => {
        deleteButton.addEventListener('click', function() {
            deleteButton.parentNode.remove();
            ajustarAlturaFundo(); 
        });
    });

    // responsável por manter o bacgroud conforme as iamgens add//
    function ajustarAlturaFundo() {
    const imagens = pictureContainer.querySelectorAll('.picture');
    const numImagens = imagens.length;
    const porcentagemReducao = 0.7; 

    // Calcula a altura do .backgroud
    const alturaImagens = pictureContainer.offsetHeight * porcentagemReducao;

    // Define a altura do .backgroud
    document.querySelector('.backgroud').style.height = `${alturaImagens}px`;
}
    // Inicializa os eventos de exclusão para produtos existentes ao carregar a página
    adicionarEventoExcluirProdutosExistentes();

    // Permite a exclusão de produtos fixos//
    function adicionarEventoExcluirProdutosExistentes() {
        document.querySelectorAll('.excluirProduto').forEach(botao => {
            botao.addEventListener('click', function() {
                botao.parentNode.remove();
                verificarExibicaoProdutoNovo();
            });
        });
    }
    // Ele chama o bacgroud para ajustar sua altura após carregar a página
    ajustarAlturaFundo();
});



/*Menu*/

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let menuButton = document.querySelector('.mobile-menu-icon button');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>'; 
    } else {
        menuMobile.classList.add('open');
        menuButton.innerHTML = '<i class="fa-solid fa-x"></i>'; 
    }
}

