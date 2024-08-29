
'use strict';
const images = [
    {'id': '1', 'url': 'imagens/chrono.jpg'},
    {'id': '2', 'url': 'imagens/inuyasha.jpg'},
    {'id': '3', 'url': 'imagens/ippo.png'},
    {'id': '4', 'url': 'imagens/tenchi.jpg'},
    {'id': '5', 'url': 'imagens/tenjhotenge.jpg'},
    {'id': '6', 'url': 'imagens/yuyuhakusho.jpg'},
]
const containerItens = document.getElementById('container-item')
function loadImages(images, containerItens){
    images.forEach(image =>{
        containerItens.innerHTML += `<div class = 'item'>
                                        <img src = '${image.url}'
                                        </div>`
})
}
loadImages (images, containerItens);
let itens = document.getElementsByClassName('item')

function previous(){
    containerItens.appendChild(itens[0])
}

function next (){
    const lastItem = itens[itens.length - 1]
    containerItens.insertBefore(lastItem, itens[0])
    itens = document.getElementsByClassName('item')
}

document.getElementById('previous').addEventListener('click', previous)
document.getElementById('next').addEventListener('click', next)