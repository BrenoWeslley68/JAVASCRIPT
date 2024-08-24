/*
if e else
*/

let interruptor = 'i'
if(interruptor == 'on'){
 //alert('A lampada está ligada')
} else if(interruptor == 'off') {
    //alert('A lampada está desligada')
} else{
   // alert('A lampada está quebrada')
}

let hora = 10
if(hora >= 0 && hora < 12) {
   // alert('Está d manha');
}else if (hora >= 12 && hora < 18){
   // alert('De acordo com o horário atual, é tarde')
} else {
   // alert('É noite')
}
let campo = document.getElementById('inome')
let botao = document.getElementById('clicar')
botao.addEventListener('click', Confirmar)
function Confirmar(){
    if(campo.value == ''){
        alert('Erro, por favor, preencha as informações antes de prosseguir')
        document.body.style.background = 'red'
    } else {
        alert('Tudo certo')
        document.body.style.background = 'green'
    }
        
}

