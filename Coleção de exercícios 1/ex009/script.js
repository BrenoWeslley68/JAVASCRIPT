let img = document.getElementById('img')
let botoes = document.getElementById('buttons')
let colorIndex = 0
function trafficLight (){
    turnOn[event.target.id]()
}
function nextIndex(){
    if( colorIndex < 2){
        colorIndex++
    } else{
        colorIndex = 0
    }
}
function changecolor() {
    let colors = ['red', 'yellow', 'green']
    let color = colors[colorIndex]
    turnOn[color]()
    nextIndex()
}
let turnOn = {
    'red': () => img.setAttribute('src', 'imagens/vermelho.png'),
    'green': () => img.setAttribute('src', 'imagens/verde.png'),
    'yellow': () => img.setAttribute('src', 'imagens/amarelo.png'),
    'automatic': () => setInterval(changecolor, 1000)
}
botoes.addEventListener('click', trafficLight)