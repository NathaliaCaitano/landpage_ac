// Controle de Menu Mobile (Hambúrguer)
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fechar menu ao selecionar uma opção
document.querySelectorAll('.nav__list a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});