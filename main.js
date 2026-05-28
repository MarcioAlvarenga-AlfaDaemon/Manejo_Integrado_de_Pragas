// Seleciona os elementos do HTML
const btnHamburguer = document.getElementById('menu-hamburguer');
const navMenu = document.getElementById('nav-menu');

// Adiciona um evento de clique no botão hambúrguer
btnHamburguer.addEventListener('click', () => {
    // A função toggle adiciona a classe 'ativo' se não tiver, ou remove se já tiver
    navMenu.classList.toggle('ativo');
});

// Opcional: Fechar o menu ao clicar em um dos links (melhora a experiência no celular)
const linksMenu = document.querySelectorAll('.nav-lista a');

linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('ativo');
    });
});