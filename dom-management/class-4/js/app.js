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

    // Selecciona el input y el botón por sus IDs
    const input = document.querySelector('#input-id'); 
    const createButton = document.querySelector('#create-button');
    
    // Selecciona la lista donde se agregarán los elementos <li>
    const section = document.querySelector('section');

    // Agrega un evento 'click' al botón
    createButton.addEventListener('click', () => {
        // Obtén el valor del input
        const inputValue = input.value.trim(); // elimina los espacios en blanco al principio y al final

        // Verifica que el input no esté vacío
        if (inputValue === '') {
            alert('Por favor, escribe algo en el campo de texto.');
            return;
        }

        // Crea un nuevo elemento <p>
        const newP = document.createElement('p');
        newP.textContent = inputValue; // Asigna el texto ingresado al <p>

        // Agrega el <li> a la lista
        section.appendChild(newP);

        // Limpia el valor del input
        input.value = '';
    });

    const removeButton = document.querySelector('#remove-button');

    removeButton.addEventListener('click', () => {
        const p = document.querySelector('p');
        console.log(p);
        
        if (p === null) {
            alert('No hay nada que eliminar.');
            return;
        }

        p.remove();

        
    });

    const replaceButton = document.querySelector('#replace-button');

    replaceButton.addEventListener('click', () => {
        const replaceSection = document.querySelector("#replace-section");
        const originalText = replaceSection.querySelector("p");
        const inputReplace = document.querySelector('#input-replace');
        const inputReplaceValue = inputReplace.value.trim();

        if (inputReplaceValue === ''){
            alert('Please write a text for replace');
            return;
        }

        originalText.textContent = inputReplaceValue;
        
    });

});

