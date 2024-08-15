function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    fano = window.document.getElementById('iano')
    var res = document.getElementById('res')
    if ( fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO!] Verifique os dados e tente novamente!')
    } else{
} var sexo = window.document.getElementsByName('sexo')
  var idade = ano - fano.value
  var gênero = ''
  var img = document.createElement('img')
  img.setAttribute('id', 'foto')
  if(fsexo[0].checked) {
    gênero ='Homem'
    if (idade >= 0 && idade <10){
        //criança
        img.setAttribute('src', 'imagens/crianca-m.jpg')
        
    }else if (idade >= 10 && idade < 21){
        //jovem
        img.setAttribute('src', 'imagens/jovem-m.jpg')
    } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'imagens/homem.jpg')
    } else {
        //idoso
        img.setAttribute('src', 'imagens/idoso.jpg')
    }
  } 
  else if (fsexo[1].checked){
    gênero = 'Mulher'
    if (idade >= 0 && idade <10){
        //criança
        img.setAttribute('src', 'imagens/crianca-f.jpg')
    }else if (idade >= 10 && idade < 21){
        //jovem
        img.setAttribute('src', 'imagens/jovem-f.jpg')
    } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'imagens/mulher.jpg')
    } else {
        //idoso
        img.setAttribute('src', 'imagens/idosa.jpg')
    }
  }
  res.innerHTML = `Detectamos ${gênero} com ${idade} anos <br/> <br/>`
  res.appendChild(img)

}
