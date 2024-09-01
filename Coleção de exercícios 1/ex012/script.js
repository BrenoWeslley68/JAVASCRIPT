let display = document.getElementById('display')
let operacao = ''
let operacaoAtual = ''
let calcula = true

function adicionarNu(id){
    if(calcula){
        display.value = id
        calcula = false
    } else {
        display.value += id
    }
}
function operacaoDividir(){
    if(!calcula){
    operacao = '/'
    operacaoAtual = display.value + operacao
    display.value= ''
    calcula = true
    }
}
function operacaoVezes(){
    if(!calcula){
    operacao = '*'
    operacaoAtual = display.value + operacao
    display.value= ''
    calcula = true
    }
}
function operacaoMais(){
    if(!calcula){
    operacao = '+'
    operacaoAtual = display.value + operacao
    display.value= ''
    calcula = true
    }
}
function operacaoMenos(){
    if(!calcula){
    operacao = '-'
    operacaoAtual = display.value + operacao
    display.value= ''
    calcula = true
    }
}
function operacaoVirgula(){
    if(!calcula){
    operacao = ','
    operacaoAtual = display.value + operacao
    
    }
}

function operacaoIgual (){
    if(!calcula){
        operacaoAtual+=display.value
        display.value =eval(operacaoAtual)
        operacaoAtual = ''
        calcula = true

    }
}
function limpar (){
    operacao = ''
    display.value = ''
    calcula = true
}

function botaoClick(evento){
    adicionarNu(evento.target.value)
}
window.addEventListener('keydown', function(evento){
    if ('123456789'.includes(evento.key)) {
        adicionarNu(evento.key)   
    }
    else if (evento.key ==='-'){
        operacaoMenos()
    }
    else if (evento.key === '+'){
        operacaoMais()
    }
    else if ( evento.key === '*'){
        operacaoVezes()
    }
    else if ( evento.key === '/'){
        operacaoDividir()
    }
    else if (evento.key=== 'Enter' ){
        operacaoIgual()
    }
    else if (evento.key === 'p'){
        limpar()
    }
}

)