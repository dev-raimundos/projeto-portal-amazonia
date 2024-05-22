// JavaScript para tornar o menu responsivo
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// JavaScript para rolagem suave ao clicar nos links do menu
const links = document.querySelectorAll('.menu li a');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop;

        window.scroll({
            top: offsetTop,
            behavior: 'smooth'
        });

        menu.classList.remove('active'); // Fecha o menu após clicar em um link
    });
});

// JavaScript para botão de rolagem suave ao topo
const scrollTopButton = document.querySelector('.scroll-top-button');

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mostra ou oculta o botão de rolagem suave dependendo da posição da página
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.classList.add('show');
    } else {
        scrollTopButton.classList.remove('show');
    }
});
