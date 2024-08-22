let img = document.getElementById('img')
let botoes = document.getElementById('buttons')
let colorIndex = 0
let intervalID = null
function trafficLight(event){
stopAutomatic()
 turnOn[event.target.id]()
 
}

function nextColor(){
    if(colorIndex < 2){
        colorIndex ++
    } else {
        colorIndex = 0
    }
}
function changecolor(){
    let colors = ['red','yellow','green']
    let color = colors[colorIndex]
    turnOn[color]()
    nextColor()
}
function stopAutomatic(){
    clearInterval(intervalID)
}
let turnOn = {
    'red': () => img.setAttribute('src', 'imagens/vermelho.png'),
    'green': () => img.setAttribute('src', 'imagens/verde.png'),
    'yellow': () => img.setAttribute('src', 'imagens/amarelo.png'),
    'automatic': () => intervalID = setInterval(changecolor, 1000)
}
botoes.addEventListener('click', trafficLight)