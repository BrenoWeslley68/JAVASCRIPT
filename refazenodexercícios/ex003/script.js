function verificar () {
    var data = new Date()
    var ano = data.getFullYear ()
    var fano = document.getElementById('iano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("Erro, data inválida")
        return
    } else {

    }
    var sexo = document.getElementsByName('sexo')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (sexo[0].checked) {
        gênero = 'Homem'
    if (idade >=0 && idade < 10){
        //crianca
        img.setAttribute('src', 'imagens/crianca-m.jpg')
    } else if(idade >= 10 && idade <21) {
        //jovem
        img.setAttribute('src', 'imagens/jovem-m.jpg')

    } else if (idade < 50){
        //adulto
        img.setAttribute('src', 'imagens/homem.jpg')

    } else {
        img.setAttribute('src', 'imagens/idoso.jpg')
    }
    
}   else if (sexo[1].checked) {
    gênero = 'Mulher'
    if (idade >=0 && idade < 10){
        //crianca
        img.setAttribute('src', 'imagens/crianca-f.jpg')
    } else if(idade >= 10 && idade <21) {
        //jovem
        img.setAttribute('src', 'imagens/jovem-f.jpg')

    } else if (idade < 50){
        //adulto
        img.setAttribute('src', 'imagens/mulher.jpg')

    } else {
        img.setAttribute('src', 'imagens/idosa.jpg')
    }
   }
   res.innerHTML = `Idetificamos uma pessoa do gênero ${gênero} e com idade de ${idade} anos <br/> <br/>`
   res.appendChild(img)
}
