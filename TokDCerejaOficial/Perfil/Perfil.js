document.addEventListener('DOMContentLoaded', function() {
    const campoTexto = document.getElementById('campoTexto');
    const botaoEditar = document.getElementById('botaoEditar');
    const botaoSalvar = document.getElementById('botaoSalvar');
    const avatar = document.getElementById('avatar');
    const uploadAvatar = document.getElementById('uploadAvatar');

    botaoEditar.addEventListener('click', function() {
        campoTexto.contentEditable = true;
        campoTexto.focus();
        botaoSalvar.style.display = 'inline-block'; // Mostra o botão Salvar ao clicar em Editar

        // Limita o crescimento dinâmico do campo de texto
        campoTexto.style.maxHeight = '55vh'; // Ajuste conforme necessário
        campoTexto.style.overflowY = 'auto'; // Adiciona barra de rolagem vertical se necessário
    });

    botaoSalvar.addEventListener('click', function() {
        const novoTexto = campoTexto.innerText.trim();
        if (novoTexto.length > 100) { // Limite de 150 caracteres
            alert('O texto não pode exceder 100 caracteres. Por favor, reduza o texto.');
            return;
        }
        console.log('Novo texto:', novoTexto);
        campoTexto.contentEditable = false;
        botaoSalvar.style.display = 'none'; // Esconde o botão Salvar após salvar o texto
    });

    // Atualiza o avatar quando o usuário seleciona uma imagem para upload
    uploadAvatar.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function() {
                avatar.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Evento para impedir a quebra de linha ao pressionar Enter no campo de texto
    campoTexto.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Impede a quebra de linha ao pressionar Enter
        }
    });
});

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