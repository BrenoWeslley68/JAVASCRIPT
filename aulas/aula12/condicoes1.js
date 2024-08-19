var agora = new Date()
var horário = agora.getHours()
console.log(`O horário atual é ${horário} horas` )
    if(horário > 1 && horário <12){
        console.log('Bom dia!')
    } else if(horário >= 12 && horário < 18) {
        console.log('Boa tarde!')
    } else{
        console.log('Boa noite!')
    }