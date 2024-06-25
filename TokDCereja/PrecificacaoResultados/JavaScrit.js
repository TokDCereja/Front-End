function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let menuButton = document.querySelector('.mobile-menu-icon button');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>'; // Ícone de menu
    } else {
        menuMobile.classList.add('open');
        menuButton.innerHTML = '<i class="fa-solid fa-x"></i>'; // Ícone de fechar
    }
}
