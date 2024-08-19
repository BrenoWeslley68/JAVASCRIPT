function carregar() {
    var img = document.getElementById('photo')
    var msg = document.getElementById('msg')
    var data = new Date()
    var horas = data.getHours()
    msg.innerHTML = `Agora são ${horas} horas`
    if (horas >= 0 && horas < 12) {
        img.setAttribute('src', 'imagens/manha.jpg')
        document.body.style.background = 'yellow'
    } else if (horas >= 12 && horas <18) {
        img.setAttribute ('src', 'imagens/tarde.jpg')
        document.body.style.background = 'orange'
    } else if ( horas >= 18 && horas <=23) {
        img.setAttribute('src', 'imagens/noite.jpg')
        document.body.style.background = 'black'
    } else {
        window.alert('valor inválido')
    }
}
