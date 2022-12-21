'use strict';

/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']; */

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

/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */

const deletedNode = document.querySelector('.fn-remove-me')
deletedNode.remove()

/*  1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en
el div de html con el atributo data-function="printHere". 
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];  */

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const test = document.querySelector(`div[data-function="printHere"]`)

const ul2 = document.createElement('ul')
test.appendChild(ul2)

function coches() {
    for (let i = 0; i < cars.length; i++) {
        let newItem2 = document.createElement('li');
        let newContent2 = document.createTextNode(`${cars[i]}`);
        newItem2.appendChild(newContent2);
        ul2.appendChild(newItem2)
        
    }
}
coches()

/*  1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];  */

const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1', number: 1}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2', number: 2},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3', number: 3},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4', number: 4},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5', number: 5}
];

const generate = document.querySelector('.generateImg')
const newDiv = document.querySelector('.images') 

function printImg() {    
    for (let i = 0; i < countries.length; i++) {
        let newHeader = document.createElement('h4')
        let newContentHeader = document.createTextNode(`${countries[i].title} `)
        let anotherContent = document.createTextNode(`${countries[i].number}`)
        newHeader.appendChild(newContentHeader);
        newHeader.appendChild(anotherContent);
        newDiv.appendChild(newHeader)
        let newImg = document.createElement('img');
        newImg.src = `${countries[i].imgUrl}.jpg`
        newDiv.appendChild(newImg)
    }
}

generate.addEventListener('click', printImg)


/*  1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista.  */

const btn = document.querySelector('.deleteButton')

function ultimoElemento() {
    countries.pop()
    printImg()
}

btn.addEventListener('click', ultimoElemento)


/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html.   */
