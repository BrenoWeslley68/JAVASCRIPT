

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('photo')
    var data = new Date()
    var hora = data.getHours()
    msg.innerText =`Agora são exatamente ${hora} horas`
    if (hora >= 0 && hora <12){
        //bom dia
        img.src = 'imagens/manha.jpg'
        
    } else if(hora>=12 && hora<18){
        //Boa tarde
        img.src= 'imagens/tarde.jpg'
        document.body.style.background = 'orange'
    } else{
        //boa noite
        img.src = 'imagens/noite.jpg'
        document.body.style.background = 'black'
    }
}