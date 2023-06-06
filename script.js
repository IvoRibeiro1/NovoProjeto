var body = document.querySelector('body')

var divsection = document.querySelector('.section')

n = 1;

let urlPaises = 'https://restcountries.com/v3.1/all';

pedido_GET(urlPaises,mostarPaises)


function mostarPaises(){

let objeto = JSON.parse(this.responseText);

console.log(objeto)

let info = objeto


for(const item of info){


const div = document.createElement('div')

const img = document.createElement('img')
const nome = document.createElement('p')
const capital = document.createElement('p')
const region = document.createElement('p')
const subregion = document.createElement('p')
const population = document.createElement('p')

divsection.appendChild(div)

div.classList.add("paises");

div.appendChild(img)
div.appendChild(nome)
div.appendChild(capital)
div.appendChild(region)
div.appendChild(subregion)
div.appendChild(population)

let idFlag = item.flags.svg
//let srcIcone = `https://flagcdn.com/${idFlag.toLowerCase()}.svg`

console.log(idFlag)


img.setAttribute('src',idFlag)
nome.textContent = 'Country Name: ' + item.name.common
region.textContent = 'Region: ' + item.region
subregion.textContent = 'Subregion: ' + item.subregion
population.textContent ='Popuation:  ' +item.population

console.log(item)

n++

}

}

function pedido_GET( url, callback ) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url );
    xhr.addEventListener('load', callback );
    xhr.send();
}