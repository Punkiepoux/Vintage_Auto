'use strict';

/*const switcher = document.querySelector('.bouton');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});*/

const boutonMenu = document.querySelector('.bouton-menu');
const menu = document.querySelector('.menu');
const menuLinkArray = document.querySelectorAll('.menu a');
const cross = document.querySelector('.croix');

menu.style.display = 'none';
console.log(menu, menuLinkArray);

// Ajouter un écouteur d'événement pour le clic sur l'image
boutonMenu.addEventListener('click', () => {
    // Afficher ou cacher le menu en fonction de son état actuel
    console.log(menu.style.display)
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

menuLinkArray.forEach((currentValue) => {
    currentValue.addEventListener('click', () => {
        console.log(menu.style.display)
        if (menu.style.display === 'none') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
})

cross.addEventListener('click', () => {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});