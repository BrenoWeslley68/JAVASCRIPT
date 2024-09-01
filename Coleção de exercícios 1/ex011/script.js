/*'use strict'

const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav',
    
}

function criarDiv (texto){
    const div = document.createElement('div')
    div.classList.add('key')
    div.textContent = texto
    div.id = texto
    document.getElementById('container').appendChild(div)

}
function tocarSom(letra){
    const audio = new Audio(`sons/${sons[letra]}`)
    audio.play()
}
function exibir(sons){
    Object.keys(sons).forEach(criarDiv)
}
function adicionarEfeito(letra){
    document.getElementById(letra).classList.add('active')
}
function removerEfeito(letra){
    const div = document.getElementById(letra)
    function removeActive(){div.classList.remove('active')}
    div.addEventListener('transitionend', removeActive)
}
function ativarDiv(evento){
    let letra = ''
    if(evento.type == 'click'){
        letra = evento.target.id
    } else{
        letra = evento.key.toUpperCase()
    }
    const letraPermitida = sons.hasOwnProperty(letra)
    if(letraPermitida){
       adicionarEfeito(letra);
        tocarSom(letra)
        removerEfeito(letra)
    }
}

exibir(sons)
document.getElementById('container').addEventListener('click', ativarDiv)

window.addEventListener('keydown', ativarDiv)
*/
'use strict';
const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}
 function criarDiv(texto){
    const div = document.createElement('div')
    div.classList.add('key')
    div.textContent = texto
    div.id = texto
    document.getElementById('container').appendChild(div)
 }
 function tocarSom(letra){
    const audio = new Audio(`sons/${sons[letra]}`)
    audio.play()
 }
 function exibir(sons){
    Object.keys(sons).forEach(criarDiv)
 }
 function adicionarEfeito(letra){
    document.getElementById(letra).classList.add('active')
 }
 function removerEfeito(letra){
    const div = document.getElementById(letra)
    function removeActive(){div.classList.remove('active')}
    div.addEventListener('transitionend', removeActive)
 }
 function ativarDiv(evento){
    let letra = ''
    if(evento.type == 'click'){
        letra = evento.target.id
    } else {
        letra = evento.key.toUpperCase()
    }
    const letraPermitida = sons.hasOwnProperty(letra)
    if(letraPermitida){
        adicionarEfeito(letra)
        tocarSom(letra)
        removerEfeito(letra)
    }
 }
 exibir(sons)
 document.getElementById('container').addEventListener('click', ativarDiv)
 window.addEventListener('keydown', ativarDiv)


