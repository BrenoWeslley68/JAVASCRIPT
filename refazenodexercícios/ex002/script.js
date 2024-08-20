function horario (){
    var msg = document.getElementById('res')
    var img = document.getElementById('img')
    var data = new Date()
    //var horas = data.getHours()
    var horas = 18
  
    if (horas >= 0 && horas <12) {
        //manha
        img.setAttribute('src', 'imagens/manha.jpg')
    } else if (horas >= 12 && horas <18){
        //tarde
        img.setAttribute('src', 'imagens/tarde.jpg')
    } else {
        //noite
        img.setAttribute('src', 'imagens/noite.jpg')
    }
    msg.innerHTML = `Agora são exatamente ${horas} horas`
}
