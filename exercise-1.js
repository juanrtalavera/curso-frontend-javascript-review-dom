'use strict';

//1.1

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const div = document.querySelector('.div')
const ul = document.createElement('ul')
div.appendChild(ul)

function paises() {
    for (let i = 0; i < countries.length; i++) {
        let newItem = document.createElement('li');
        let newContent = document.createTextNode(`${countries[i]}`);
        newItem.appendChild(newContent);
        ul.appendChild(newItem)
        
    }
}
paises()