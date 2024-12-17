// 1. getElementById()
// Seleccionar el título del header por su ID
const headerTitle = document.getElementById('app-title');
console.log("---1.Elemento con ID: app-title---"); 
console.log(headerTitle); // Salida: Este es el header

// 2. getElementsByClassName()
// Seleccionar todos los elementos con la clase "menu-item"
const menuItems = document.getElementsByClassName('menu-item');
console.log("---2.Class:menu-item---"); 
for (let item of menuItems) {
  console.log(item); // Salida: About Me, Blogs, Contact
}

// 3. getElementsByTagName()
// Seleccionar todos los <p> dentro del <section>
const paragraphs = document.getElementsByTagName('p');
console.log("3.Elementos por el tag")
for (let p of paragraphs) {
  console.log(p); // Salida: Texto 1, Texto 2, Texto 3
}

// 4. querySelector()
// Seleccionar el primer enlace en la lista de navegación
const firstLink = document.querySelector('.menu-item a');
console.log("---4.El primer enlace en la lista de navegación---")
console.log(firstLink); // Salida: About Me

// 5. querySelectorAll()
// Seleccionar todos los elementos <li> dentro del <ul>
const listItems = document.querySelectorAll('#item-parent .menu-item');
console.log("---5.Todos los elementos <li> dentro del <ul>---")
listItems.forEach(item => console.log(item)); 
// Salida: About Me, Blogs, Contact

// 6. closest()
// Seleccionar un enlace y encontrar el <ul> más cercano
const blogLink = document.querySelector('.menu-item a[href="#"]');
const parentList = blogLink.closest('ul');

console.log("---6.Encontrar el <ul> más cercano---")
console.log(parentList); // Salida: item-parent

// 7. Navegar por el DOM usando propiedades (children, parentElement)
// Seleccionar el <ul> y obtener sus hijos
const menuList = document.getElementById('item-parent');
const menuChildren = menuList.children;
for (let child of menuChildren) {
  console.log(child); // Salida: About Me, Blogs, Contact
}

// Seleccionar un <li> y acceder al elemento padre
const menuItem = document.querySelector('.menu-item');
console.log(menuItem.parentElement.id); // Salida: item-parent

// 8. Bonus: Selección dinámica por eventos
// Añadir un evento a cada enlace
document.querySelectorAll('.menu-item a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    console.log(`Hiciste clic en: ${e.target.textContent}`);
  });
});