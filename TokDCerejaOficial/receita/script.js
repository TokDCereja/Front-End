const toggleAside = () => {
    const aside = document.getElementById('aside');
    aside.style.display = aside.style.display === 'none' ? 'block' : 'none';

    const bbt = document.querySelector('.bbt');
    bbt.style.display = aside.style.display === 'none' ? 'block' : 'none';
};

const bbt = document.querySelector('.bbt');
bbt.addEventListener('click', toggleAside);


const adicionar = document.getElementById("adicionar");
const corpoTabela = document.getElementById("corpoTabela");

let contador = 1;

adicionar.addEventListener("click", () => {
    const novaLinha = document.createElement("tr");

    novaLinha.innerHTML = `
    <td><input type="text" class="editavel" value=""></td>
    <td><input type="text" class="editavel" value=""></td>
    <td><input type="text" class="editavel" value=""></td>
    <td><input type="text" class="editavel" value=""></td>
    <td><input type="text" class="editavel" value=""></td>
    `;

    corpoTabela.appendChild(novaLinha);
    contador++;
});

// aside 

// javscript navbar 

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