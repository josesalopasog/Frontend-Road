document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('button');

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');  // Alterna la clase 'dark-mode' en el elemento <body>

        // Cambiar estilos específicos
        const header = document.querySelector('header');
        header.classList.toggle('dark-mode');  // Alterna la clase 'dark-mode' en el elemento <body>

        const menuLinks = document.querySelectorAll('.menu-item a');
        menuLinks.forEach(link => link.classList.toggle('dark-mode'));  // Alterna la clase 'dark-mode' en el elemento <body>
    });
});


// El método addEventListener() en JavaScript se utiliza para registrar (asociar) 
// una función de evento que se ejecutará cada vez que un evento específico ocurra 
// en un elemento. Es una de las formas más flexibles y modernas de manejar eventos en el DOM.