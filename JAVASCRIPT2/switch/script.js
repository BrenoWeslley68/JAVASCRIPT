/* switch
É usado para realizar diferentes ações com base em diferentes condições no mesmo bloco de verificação. Caso a condição não seja compatível não será executado e o valor padrão será acionado.
*/
function verificarDia(){
    let dia = new Date().getDay()
    switch (dia){
        case 0: 
        document.getElementById('texto').innerHTML =  `Hoje é dia ${dia} da semana`
        break
        case 1: 
        document.getElementById('texto').innerHTML =  `Hoje é dia ${dia} da semana`
        break
        case 2: 
        document.getElementById('texto').innerHTML =  `Hoje é dia ${dia} da semana`
        break
        case 3: 
        document.getElementById('texto').innerHTML =  `Hoje é dia ${dia} da semana`
        break
        case 4: 
        document.getElementById('texto').innerHTML =  `Hoje é dia ${dia} da semana`
        break
        case 5: 
        document.getElementById('texto').innerHTML =  `Hoje é dia ${dia} da semana`
        break
        case 6: 
        document.getElementById('texto').innerHTML =  `Hoje é dia ${dia} da semana`
        break
        default: document.getElementById('texto').innerHTML = `Não sei que dia da semana é hoje`
    }
}