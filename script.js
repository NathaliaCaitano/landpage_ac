window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = "#ffffff";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
    } else {
        header.style.background = "rgba(255,255,255,0.98)";
        header.style.boxShadow = "none";
    }
});