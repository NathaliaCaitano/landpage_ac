/**
 * Aime Carvalho - Interaction Script
 * Desenvolvido para alta performance e fluidez.
 */

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    // Efeito de sombra no menu ao rolar
    if (window.scrollY > 50) {
        header.style.background = "#ffffff";
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
    } else {
        header.style.background = "rgba(255,255,255,0.9)";
        header.style.boxShadow = "none";
    }
});

// Suavização do Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});