document.addEventListener('DOMContentLoaded', () => {

    // 1. ANIMAÇÃO DE REVELAÇÃO (FADE IN)
    const reveal = () => {
        const elements = document.querySelectorAll('.about, .testimonial-card, .case-card, .cta-box');
        elements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    // Inicializa elementos escondidos
    const toAnimate = document.querySelectorAll('.about, .testimonial-card, .case-card, .cta-box');
    toAnimate.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all 0.9s cubic-bezier(0.17, 0.67, 0.83, 0.67)";
    });

    window.addEventListener('scroll', reveal);
    reveal(); // Executa uma vez ao carregar

    // 2. HEADER DINÂMICO
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.height = "70px";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
        } else {
            header.style.height = "80px";
            header.style.boxShadow = "none";
        }
    });

    // 3. SCROLL SUAVE
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});