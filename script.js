// Aime Carvalho - Portfolio Interaction
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    
    // Controle do menu ao rolar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            header.style.padding = "10px 0";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
        } else {
            header.style.padding = "0";
            header.style.boxShadow = "none";
        }
    });

    // Navegação suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});